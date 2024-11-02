document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText === '') return;
    addTaskToDOM(taskText, false);
    saveTask(taskText, false);
    taskInput.value = '';
}

function addTaskToDOM(text, completed) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = text;
    if (completed) li.classList.add('completed');
    li.addEventListener('click', () => toggleTask(li));
    taskList.appendChild(li);
}

function toggleTask(li) {
    li.classList.toggle('completed');
    updateTask(li.textContent, li.classList.contains('completed'));
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text, completed });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(task => task.text === text);
    if (task) task.completed = completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', loadData);

function loadData() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username) document.getElementById('username').value = username;
    if (password) document.getElementById('password').value = password;
}

function saveData() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}
document.addEventListener('DOMContentLoaded', loadBookmarks);

function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.forEach(bookmark => addBookmarkToDOM(bookmark.name, bookmark.url));
}

function addBookmark() {
    const name = document.getElementById('bookmarkName').value;
    const url = document.getElementById('bookmarkURL').value;
    if (name === '' || url === '') return;
    addBookmarkToDOM(name, url);
    saveBookmark(name, url);
    document.getElementById('bookmarkName').value = '';
    document.getElementById('bookmarkURL').value = '';
}

function addBookmarkToDOM(name, url) {
    const bookmarkList = document.getElementById('bookmarkList');
    const li = document.createElement('li');
    li.innerHTML = `<a href="${url}" target="_blank">${name}</a> <button onclick="removeBookmark('${name}')">Видалити</button>`;
    bookmarkList.appendChild(li);
}

function saveBookmark(name, url) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push({ name, url });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function removeBookmark(name) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks = bookmarks.filter(bookmark => bookmark.name !== name);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    document.getElementById('bookmarkList').innerHTML = '';
    loadBookmarks();
}

document.addEventListener('DOMContentLoaded', loadContacts);

function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.forEach(contact => addContactToDOM(contact));
}

function addContact() {
    const contact = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };
    if (!contact.firstName || !contact.lastName || !contact.phone || !contact.email) return;
    addContactToDOM(contact);
    saveContact(contact);
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
}

function addContactToDOM(contact) {
    const contactList = document.getElementById('contactList');
    const li = document.createElement('li');
    li.textContent = `${contact.firstName} ${contact.lastName} - ${contact.phone} - ${contact.email}`;
    contactList.appendChild(li);
}

function saveContact(contact) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const student = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        age: event.target.age.value,
        course: event.target.course.value,
        faculty: event.target.faculty.value,
        subjects: event.target.subjects.value.split(',')
    };
    addStudent(student);
    event.target.reset();
});

function addStudent(student) {
    const students = getStudents();
    students.push(student);
    saveStudents(students);
    displayStudents();
}

function getStudents() {
    const studentsJSON = localStorage.getItem('students');
    return studentsJSON ? JSON.parse(studentsJSON) : [];
}

function saveStudents(students) {
    localStorage.setItem('students', JSON.stringify(students));
}

function displayStudents() {
    const students = getStudents();
    const tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.faculty}</td>
            <td>${student.subjects.join(', ')}</td>
            <td>
                <button onclick="editStudent(${index})">Редагувати</button>
                <button onclick="deleteStudent(${index})">Видалити</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteStudent(index) {
    const students = getStudents();
    students.splice(index, 1);
    saveStudents(students);
    displayStudents();
}

function editStudent(index) {
    const students = getStudents();
    const student = students[index];
    document.getElementById('firstName').value = student.firstName;
    document.getElementById('lastName').value = student.lastName;
    document.getElementById('age').value = student.age;
    document.getElementById('course').value = student.course;
    document.getElementById('faculty').value = student.faculty;
    document.getElementById('subjects').value = student.subjects.join(', ');
    deleteStudent(index);
}

document.addEventListener('DOMContentLoaded', displayStudents);

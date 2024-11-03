document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { name: "Іван", age: 25 },
        { name: "Олена", age: 30 },
        { name: "Петро", age: 35 }
    ];

    const source = document.getElementById('template').innerHTML;
    const template = Handlebars.compile(source);
    const context = { users: users };
    const html = template(context);

    document.getElementById('app').innerHTML = html;
});

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const feedback = {
        name: name,
        email: email,
        message: message
    };
    
    console.log('Feedback submitted:', feedback);
    
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('feedback-form').reset();
});

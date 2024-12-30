document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <h3>${name}</h3>
        <p>${email}</p>
        <p>${message}</p>
    `;

    document.getElementById('messagesContainer').appendChild(messageElement);

    document.getElementById('messageForm').reset();
});
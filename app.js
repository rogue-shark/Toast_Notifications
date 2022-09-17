const btn = document.querySelector('.btn')
const toasts = document.querySelector('.container')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

btn.addEventListener('click', () => createNotification())

function createNotification() {
    const notification = document.createElement('div')
    notification.classList.add('toast')

    notification.innerText = randomMessage()

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 2500)
}

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

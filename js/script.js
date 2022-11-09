window.addEventListener('load', () => {
    const today = new Date()
    document.getElementById('year').textContent = today.getFullYear()
    document.getElementById('dateTime').textContent = 'Last updated: ' + document.lastModified
})

const userInput = document.getElementById('favchap');
const userList = document.querySelector('.list');
const userButton = document.querySelector('main div button');

userButton.addEventListener('click', () => {
    if (userInput.value==""){
        return;
    }

    const newElement = document.createElement('li');
    const newDelete = document.createElement('button');
    newElement.textContent = userInput.value;
    newDelete.textContent = "❌";
    newElement.append(newDelete);
    userList.append(newElement);
    newDelete.addEventListener('click', () => {
        newElement.remove();
    });
    userInput.focus();
    userInput.value = "";
});


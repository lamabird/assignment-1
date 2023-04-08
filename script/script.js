const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const divA = document.querySelector('.div_a');
    divA.classList.toggle('dark-theme');
    const divB = document.querySelector('.div_b');
    divB.classList.toggle('dark-theme');
    const header = document.querySelector('.header');
    header.classList.toggle('dark-theme');
    const header2 = document.querySelector('.header2');
    header2.classList.toggle('dark-theme');
    const toggleButtons = document.querySelectorAll('.toggle');
    toggleButtons.forEach(button => button.classList.toggle('dark-theme'));
    const div0 = document.querySelector('.div_0');
    div0.classList.toggle('dark-theme');
    const div1 = document.querySelector('.div_1');
    div1.classList.toggle('dark-theme');
    const div2 = document.querySelector('.div_2');
    div2.classList.toggle('dark-theme');
    const div3 = document.querySelector('.div_3');
    div3.classList.toggle('dark-theme');
    const div4 = document.querySelector('.div_4');
    div4.classList.toggle('dark-theme');
    const img1 = document.querySelector('.img1');
    img1.classList.toggle('dark-theme');
    const img2 = document.querySelector('.img2');
    img2.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Light Theme';
    } else {
        themeToggle.textContent = 'Dark Theme';
    }
});

// -----------------------------------------------

const divC = document.querySelector('.div_c');
divC.contentEditable = true;

const cancelBtn = document.querySelector('.toggle5');
const textarea = document.querySelector('textarea');
const saveBtn = document.querySelector('.toggle4');
const div3 = document.querySelector('.div_3');

const cancelButton = document.getElementById('cancel-button');
const textArea = document.querySelector('.note-textarea');
const saveButton = document.querySelector('.save-button');
const newNoteButton = document.querySelector('.new-note-button');

let buttonsVisible = false;

newNoteButton.addEventListener('click', () => {
    if (!buttonsVisible) {
        textArea.style.display = 'block';
        saveButton.style.display = 'block';
        cancelButton.style.display = 'block';
        buttonsVisible = true;
    } else {
        textArea.value = '';
        textArea.style.display = 'none';
        saveButton.style.display = 'none';
        cancelButton.style.display = 'none';
        buttonsVisible = false;
    }
});

cancelButton.addEventListener('click', () => {
    textArea.style.display = 'none';
    saveButton.style.display = 'none';
    cancelButton.style.display = 'none';
});

const notesArray = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"},
    {title: "note three", body: "this is my third note"}
];

const sidebarList = document.querySelector('.sidebar-list');

saveButton.addEventListener('click', () => {
    const noteTitle = prompt('Enter a title for your note:');
    if (noteTitle) {
        const noteBody = textArea.value;
        const newNote = {title: noteTitle, body: noteBody};
        notesArray.push(newNote);
        const newListItem = document.createElement('li');
        newListItem.textContent = noteTitle;
        sidebarList.appendChild(newListItem);
        textArea.value = '';
    }
});

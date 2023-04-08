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
const textArea = document.querySelector('.div_c');
const cancelButton = document.querySelector('.toggle5');
const saveButton = document.querySelector('.toggle4');

cancelButton.addEventListener('click', () => {
    textArea.style.display = 'none';
    saveButton.style.display = 'none';
    cancelButton.style.display = 'none';
});

const newNoteButton = document.querySelector('.toggle3');
newNoteButton.addEventListener('click', () => {
    const textArea = document.querySelector('.div_c');

    if (textArea.style.display === 'none') {
        textArea.style.display = 'block';
        saveButton.style.display = 'block';
        cancelButton.style.display = 'block';
        textArea.value = '';
    } else {
        textArea.style.display = 'none';
        saveButton.style.display = 'none';
        cancelButton.style.display = 'none';
    }
});

const notesArray = [
    {title: 'note one', body: 'this is my first note'},
    {title: 'note two', body: 'this is my second note'}
];

const saveNoteButton = document.querySelector('.toggle4');
saveNoteButton.addEventListener('click', () => {
    const textArea = document.querySelector('.div_c');
    const title = prompt('Enter the title of the note:');
    const newNote = {title, body: textArea.value};
    notesArray.push(newNote);

    const list = document.querySelector('.div_a');
    const listItem = document.createElement('li');
    listItem.textContent = title;
    listItem.dataset.note = JSON.stringify(newNote);
    list.appendChild(listItem);
});

const noteList = document.querySelector('.div_a');
noteList.addEventListener('click', (event) => {
    const noteData = event.target.dataset.note;
    if (noteData) {
        const note = JSON.parse(noteData);
        const divC = document.querySelector('.div_c');
        divC.value = note.body;
    }
});


const h2 = document.querySelector('h2');

const search = `<label for="search" class="student-search">
                     <span>Search by name</span>
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                </label>`


h2.insertAdjacentHTML("afterend", search);
let searchInput = document.querySelector('.student-search');
let searchValue = document.querySelector('input');

function searchTable(input, studentsObj) {
    studentList.innerHTML = '';

    for (let i = 0; i <= studentsObj.length - 1; i++) {
        if (input.length === 0) {
            showPage(data, 1)
        }
        if (input.length != 0 && (studentsObj[i].name.first.toLowerCase().includes(input.toLowerCase()) || studentsObj[i].name.last.toLowerCase().includes(input.toLowerCase()))) {
            const studentHTML = `<li class="student-item cf">
                <div class="student-details">
                    <img class="avatar" src="${data[i].picture.large}">
                    <h3>${data[i].name.first} ${data[i].name.last}</h3>
                    <span class="email">${data[i].email}</span>
                </div>
                    <div class="joined-details">
                        <span class="date">Joined ${data[i].registered.date}</span>
                    </div>
                </li>`

            studentList.insertAdjacentHTML("beforeend", studentHTML); // before end because 1-9 not 9-1
        }
    }
}

// Both call search function
searchInput.addEventListener('keyup', e => {
    e.preventDefault();
    if (e.target.id = 'search') {}
    searchTable(searchValue.value, data)
});

searchInput.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
        searchValue.value = '';
    }
})
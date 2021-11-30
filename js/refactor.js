/**
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
This project will take an array of student objects and display the student's information along with their picture. Buttons will be added for pagination.
This array is also searchable and dynamically updates as the user types or submits search information.
*/

/**
 *
 */

const itemsPerPage = 9;
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');


/**
 * This function loops through the array of students and will generate the HTML needed to display nine list elements per page
 * @param {array} list Array of student objects
 * @param {number} page The number of students per page
 */

function showPage(list, page) {
    const startIndex = (page * itemsPerPage) - itemsPerPage;
    const endIndex = page * itemsPerPage;

    studentList.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            const studentHTML = `
              <li class="student-item cf">
                 <div class="student-details">
                    <img class="avatar" src="${list[i].picture.large}">
                    <h3>${list[i].name.first} ${list[i].name.last}</h3>
                    <span class="email">${list[i].email}</span>
                 </div>
                 <div class="joined-details">
                    <span class="date">Joined ${list[i].registered.date}</span>
                 </div>
              </li>`;
            studentList.insertAdjacentHTML('beforeend', studentHTML);
        }
    }
}

/**
 * This function creates and inserts the elements needed for pagination buttons.
 * @param {array} list Array of student objects
 */
function addPagination(list) {
    const numOfPages = Math.ceil(list.length / itemsPerPage);

    linkList.innerHTML = '';

    for (let i = 1; i <= numOfPages; i++) {
        const button = `<li><button type="button">${i}</button></li>`;
        linkList.insertAdjacentHTML('beforeend', button);
    }

    document.querySelector('.link-list button').className = 'active';

    linkList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.active').className = '';
            e.target.className = 'active';
            showPage(data, e.target.textContent);
        }
    });
}

showPage(data, 1);
addPagination(data);

/**
 * The following code inserts a label to be accessed by the searchArray Function
 */
const h2 = document.querySelector('h2');
const search = `
     <label for="search" class="student-search">
        <span>Search by name</span>
        <input id="search" placeholder="Search by name...">
        <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
     </label>`;

h2.insertAdjacentHTML('afterend', search);
const searchInput = document.querySelector('.student-search');
const searchValue = document.querySelector('input');
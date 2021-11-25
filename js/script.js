/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
This project will take an array of student objects and display the student's information along with their picture. Buttons will be added for pagination.
This array is also searchable and dynamically updates as the user types or submits search information.
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
 *
 */

function addPagination(list) {
   const numOfPages = Math.ceil(list.length / itemsPerPage);

   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li><button type="button">${i}</button></li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }

   document.querySelector('button').className = 'active';

   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(data, e.target.textContent);
      }
   });
}

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

function searchTable(input, list) {
   studentList.innerHTML = '';
   const newList = [];

   for (let i = 0; i <= list.length - 1; i++) {
      if (input.length != 0 && (list[i].name.first.toLowerCase().includes(input.toLowerCase()) || list[i].name.last.toLowerCase().includes(input.toLowerCase()))) {
         newList.push(list[i]);
         showPage(newList, 1);
         addPagination(newList);
      }
   }

   if (newList.length == 0) {
      studentList.innerHTML = '<span>Sorry! No results found. Please search again</span>';
      linkList.innerHTML = '';
   }
   console.log(newList);
}

searchInput.addEventListener('keyup', (e) => {
   e.preventDefault();
   if (searchValue.value == 0) {
      showPage(data, 1);
      addPagination(data);
   } else if (searchValue.value != 0) {
      searchTable(searchValue.value, data);
   }
});

searchInput.addEventListener('click', (e) => {
   e.preventDefault();
   if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
      searchTable(searchValue.value, data);
      searchValue.value = '';
   }
});

showPage(data, 1);
addPagination(data);
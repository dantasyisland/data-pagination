/*s
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;
const studentList = document.querySelector('.student-list');


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
         studentList.insertAdjacentHTML("beforeend", studentHTML);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let numOfPages = Math.ceil(list.length / itemsPerPage);
   const linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li><button type="button">${i}</button></li>`
      linkList.insertAdjacentHTML('beforeend', button)
   }

   document.querySelector('button').className = "active";

   linkList.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = "active";
         showPage(data, e.target.innerText)
      }
   })
}


showPage(data, 1);
addPagination(data);

const h2 = document.querySelector('h2');
const search = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`


h2.insertAdjacentHTML("afterend", search);

let searchInput = document.querySelector('.student-search');
let searchValue = document.querySelector('input');

function searchTable(input, list) {
   studentList.innerHTML = '';
   let newList = []

   for (let i = 0; i <= list.length - 1; i++) {
      if (input.length != 0 && (list[i].name.first.toLowerCase().includes(input.toLowerCase()) || list[i].name.last.toLowerCase().includes(input.toLowerCase()))) {
         newList.push(list[i]);
         showPage(newList, 1);
         addPagination(newList);

      }
      //  else if (input.length != 0 && (list[i].name.first.toLowerCase().includes(input.toLowerCase()) || list[i].name.last.toLowerCase().includes(input.toLowerCase()))) {
      //
      //
      // }
   }
   if (newList.length == 0) {
      studentList.innerHTML = `<span>Sorry! No results found. Please search again</span>`;
      document.querySelector('.link-list').innerHTML = '';
   }
   console.log(newList);
}

// Both call search function
searchInput.addEventListener('keyup', e => {
   e.preventDefault();
   if (searchValue.value == 0) {
      showPage(data, 1)
      addPagination(data);

   } else if (searchValue.value != 0) {
      searchTable(searchValue.value, data)
   }
});

searchInput.addEventListener('click', e => {
   e.preventDefault();
   if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
      searchValue.value = '';
   }
})
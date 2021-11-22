/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


let itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const studentList = document.querySelector('.student-list');

/**
 * @param {Object[]} list
 * @page {number} page
 */
function showPage(list,page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   studentList.innerHTML = '';
   for(let i = 0; i < list.length; i++) {
      if(i>=startIndex && i < endIndex) {
         function createElement(elementName, className, innertext) {
            const element = document.createElement(elementName);
            if(className) element.className = className;
            if(innertext) element.innerText = innertext;
            return element;
         }

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

         studentList.insertAdjacentHTML("beforeend",studentHTML); // before end because 1-9 not 9-1








      }


      //  <li class="student-item cf">
      //    <div class="student-details">
      //      <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
      //      <h3>Ethel Dean</h3>
      //      <span class="email">ethel.dean@example.com</span>
      //    </div>
      //    <div class="joined-details">
      //      <span class="date">Joined 12-15-2005</span>
      //    </div>
      //  </li>



      }


}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
    // create a variable to calculate the number of pages needed
   let numOfPages = Math.ceil(list.length/itemsPerPage);
  // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');

  // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
  // loop over the number of pages needed
     for(let i = 1; i <= numOfPages; i++) {
        const button = `<li><button type="button">${i}</button></li>`
        linkList.insertAdjacentHTML('beforeend',button)

        console.log(i);
     }
    // create the elements needed to display the pagination button
    // insert the above elements

  // give the first pagination button a class of "active"
     document.querySelector('button').className = "active";

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments

      console.log(list);

   linkList.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') {
         document.querySelector('.active').className = '';
         e.target.className = "active";
         showPage(data,e.target.innerText)
      }
   })
}
addPagination(data);
// showPage(data, 1);






const h2 = document.querySelector('h2');
const search = `<label for="search" class="student-search">
                     <span>Search by name</span>
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                </label>`
h2.insertAdjacentHTML("afterend",search);
let searchInput = document.querySelector('#search');
let searchValue = searchInput.textValue; /// redunant

searchInput.addEventListener('keyup', e => {
   console.log(e.target.value);
   removeChildren();
   for(i = 0; i<=data.length; i++) {


   }
});

if (!searchValue) {
   showPage(data,1);
}


function removeChildren()  {
 while(studentList.firstChild) {
    studentList.removeChild(studentList.firstChild)
 }
}
// removeChildren();

// Call functions

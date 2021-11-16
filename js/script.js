/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



//        EXAMPLE - Student list item:

// <li class="student-item cf">
//    <div class="student-details">
//       <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
//       <h3>Ethel Dean</h3>
//       <span class="email">ethel.dean@example.com</span>
//    </div>
//    <div class="joined-details">
//       <span class="date">Joined 12-15-2005</span>
//    </div>
// </li>

// li has two children which are divs - student-details has 3 children - pic name email

console.log(data);
let ul = document.querySelector(".student-list")
let li = document.createElement('li');
let span = document.createElement('span');
span.innerText = 'THE SPAN';
// li.appendChild(span);
// ul.appendChild(li);

let studentDetails = document.createElement('div');
studentDetails.className = 'student-details';
studentDetails.innerText = 'teststs'


let profilePic = document.createElement('img');
profilePic.src = data[0].picture.large;
li.appendChild(profilePic)
// li.appendChild.studentDetails;
ul.appendChild();


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions

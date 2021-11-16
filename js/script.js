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

// Function will create 9 li from two functions that create divs
// pagination through the array

// li has two children which are divs - student-details has 3 children - pic name email







let i = 0;

const ul = document.querySelector('.student-list')

// ------------------
const li = document.createElement('li');
li.className = 'student-item cf';
// ----------------
const studentDetailsDiv = document.createElement('div');
studentDetailsDiv.className = 'student-details';

// ------ 3 children - Parent Student Details Div

const profilePic = document.createElement('img');
profilePic.className = 'avatar';
profilePic.src = data[i].picture.large;
profilePic.alt = 'Profile Picture';

const h3 = document.createElement('h3');
h3.innerText = `${data[i].name.first} ${data[i].name.last}`

const email = document.createElement('span');
email.className = 'email';
email.innerText = `${data[i].email}`;

// ----- Append
studentDetailsDiv.appendChild(profilePic);
studentDetailsDiv.appendChild(h3);
studentDetailsDiv.appendChild(email);


// ---------------

const joinedDetailsDiv = document.createElement('div');
joinedDetailsDiv.className = 'joined-details';

const dateJoined = document.createElement('span');
dateJoined.className = 'joined-details';
dateJoined.innerText = `Joined ${data[i].registered.date}`


// ------ Append
joinedDetailsDiv.appendChild(dateJoined)


li.appendChild(studentDetailsDiv);
li.appendChild(joinedDetailsDiv);

// li two children the divs
// StudentDetails - 3 children img h3 span email
// Joined Details - 1 child - span date

// li.appendChild(span);
// ul.appendChild(li);




// li.appendChild.studentDetails;
ul.appendChild(li);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions



function createList(){
    const ul = document.querySelector('.student-list')

    for(let i = 0; i < 8; i++) {
        const li = createLI();

        const studentDetailsDiv = createElement('div','student-details')
        // ------ 3 children - Parent Student Details Div

        const profilePic = createElement('img','avatar');
        profilePic.src = data[i].picture.large;
        profilePic.alt = 'Profile Picture';

        const h3 = createElement('h3','',`${data[i].name.first} ${data[i].name.last}`)
        const email = createElement('span','email',`${data[i].email}`)

        // ----- Append
        studentDetailsDiv.appendChild(profilePic);
        studentDetailsDiv.appendChild(h3);
        studentDetailsDiv.appendChild(email);


        // ---------------

        const joinedDetailsDiv = createElement('div','joined-details')
        const dateJoined = createElement('span','date',`Joined ${data[i].registered.date}`)



        // ------ Append
        joinedDetailsDiv.appendChild(dateJoined)


        li.appendChild(studentDetailsDiv);
        li.appendChild(joinedDetailsDiv);
        ul.appendChild(li);
    }


}


function createElement(type, className, innertext) {
    const element = document.createElement(type);
    if(className) element.className = className;
    if(innertext) element.innerText = innertext;
    return element;
}

function createLI() {
    const li = createElement('li','student-item cf');
    return li
}


const list = createList();

// For every amount of X students add a button
function Pagination {

}
// li two children the divs
// StudentDetails - 3 children img h3 span email
// Joined Details - 1 child - span date

// li.appendChild(span);
// ul.appendChild(li);




// li.appendChild.studentDetails;

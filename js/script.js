/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/


// a variable to store the student list item elements in the student list.
const studentList = document.querySelectorAll('li');
//a variable to store the number of items to show on each “page”
const maxItems = 10;


/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

const showPage = (list, page) => {
  // two variables to store the start index and the end index of the list items to be displayed on the given page.
  // To make this function dynamic and work with a list of any length, a bit of basic math can be used to determine these values.
  let startIndex = ((i * 10) - 10);
  let endIndex = (i * 10);
  for (let i = 0; i < studentList.length; i++) {
    const students = studentList[i];
    if ( i >= startIndex && i <= endIndex ) {
       students[i].style.display = 'block';
    } else {
       students[i].style.display = 'none';
    }
  }
};


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  //A container DIV element with a class name of “pagination”
  let div = document.createElement('div');
  div.className = 'pagination';
  // append child to page class in HTML
  let page = document.querySelector('.page');
  page.appendChild(div);

  let ul = document.createElement('ul');
  div.appendChild(ul);

  for (let i = 0; i < studentList.length; i++) {
    studentList[i]
  }

  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML = "Paragraph changed!";

  console.log(div);

  // <!-- pagination HTML to create dynamically -->

  // <div class="pagination">
  //   <ul>
  //     <li>
  //       <a class="active" href="#">1</a>
  //     </li>
  //      <li>
  //       <a href="#">2</a>
  //     </li>
  //      <li>
  //       <a href="#">3</a>
  //     </li>
  //      <li>
  //       <a href="#">4</a>
  //     </li>
  //      <li>
  //       <a href="#">5</a>
  //     </li>
  //   </ul>
  // </div>

  // <!-- end pagination -->
};

appendPageLinks();

// Remember to delete the comments that came with this file, and replace them with your own code comments.

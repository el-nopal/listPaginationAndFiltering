/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// =========================
//  VARIABLES
// =========================
// a variable to store the student list item elements in the student list.
const studentList =  document.querySelectorAll('.student-item.cf');
//a variable to store the number of items to show on each “page”
const maxItems = 10;

// =========================
//  SHOW PAGES FUNCTION
// =========================
const showPage = (list, page) => {
  // two variables to store the start index and the end index of the list items to be displayed on the given page.
  // To make this function dynamic and work with a list of any length, a bit of basic math can be used to determine these values.
  let startIndex = (page * maxItems) - maxItems;
  let endIndex = (page * maxItems)-1;
  // Loop over the list parameter.
  for (let i = 0; i < list.length; i++) {
    if ( i >= startIndex && i <= endIndex ) {
       list[i].style.display = 'block';
    } else {
       list[i].style.display = 'none';
    }
  }
};

// =========================
//  APPEND PAGE LINKS
// =========================
const appendPageLinks = (list) => {
  // 1. Determine how many pages are needed for the list by dividing the
  // total number of list items by the max number of items per page
  const pages = Math.ceil (list.length / maxItems);
  // 2. A container DIV element with a class name of “pagination”
  // append child to page class in HTML
  const div = document.createElement('div');
  div.className = 'pagination';
  const page = document.querySelector('.page');
  page.appendChild(div);
  // 3. Add a ul to the “pagination” div to store the pagination links
  const ul = document.createElement('ul');
  div.appendChild(ul);
  // 4. for every page, add li and a tags with the page number text
  for (let i = 0; i < pages; i++) { //pages doesnt have a length.
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.href = '#';
    a.textContent = i +1;
    if (i === 0) {
      a.className = 'active';
    }
  // 5. Add an event listener to each a tag. When they are clicked
  // call the showPage function to display the appropriate page
    a.addEventListener ('click', (e) => {
      let a = document.querySelectorAll('a');
      for (let i = 0; i < a.length; i++) {
        a[i].className = ''; //removing active status
      }
      let active = e.target.textContent;
      a[i].className = "active";
      showPage(studentList, active);
    });
  }
};

showPage(studentList, 1);
appendPageLinks(studentList);

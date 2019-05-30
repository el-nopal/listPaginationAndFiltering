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
  let startIndex = (page * 10) - 10;
  let endIndex = page * 10;
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
  const pages = Math.ceil (list.length / 10)
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
  for (let i = 0; i < pages.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.addEventListener('click', (e) => {
      //calling showPage() each time a link to a page is clicked
      showPage(list, i);
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
        event.target.className = 'active';
      }
    });
  }
};

showPage(studentList, 1);
appendPageLinks(studentList);

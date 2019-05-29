/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// a variable to store the student list item elements in the student list.
const studentList = document.querySelectorAll('li');
//a variable to store the number of items to show on each “page”
const maxItems = 10;

// =========================
//  SHOW PAGES FUNCTION
// =========================
const showPage = (list, page) => {
  // two variables to store the start index and the end index of the list items to be displayed on the given page.
  // To make this function dynamic and work with a list of any length, a bit of basic math can be used to determine these values.
  let startIndex = ((i * 10) - 10);
  let endIndex = (i * 10);
  for (let i = 0; i < studentList.length; i++) {
    let students = studentList[i];
    if ( i >= startIndex && i <= endIndex ) {
       students[i].style.display = 'block';
    } else {
       students[i].style.display = 'none';
    }
  }
};

// =========================
//  APPEND PAGE LINKS
// =========================

const appendPageLinks = (list) => {
  // 1. Determine how many pages are needed for the list by dividing the
  // total number of list items by the max number of items per page
  numOfPages = Math.ceil(list.length/ maxItems);
  // 2. A container DIV element with a class name of “pagination”
  // append child to page class in HTML
  let div = document.createElement('div');
  div.className = 'pagination';
  let page = document.querySelector('.page');
  page.appendChild(div);
  // 3. Add a ul to the “pagination” div to store the pagination links
  let ul = document.createElement('ul');
  div.appendChild(ul);
  // 4. for every page, add li and a tags with the page number text
  for (let i = 0; i < studentList.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    let a = document.createElement('a');
    
    li.innerHTML = "Paragraph changed!";
  };

  console.log(div);
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
};

appendPageLinks();

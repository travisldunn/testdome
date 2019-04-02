// DESCRIPTION
// Write a function that removes all items that are not numbers from
// the array.The function should modify the existing array, not create a new one.

// For example, if the input array contains values[1, 'a', 'b', 2],
// after processing, the array will contain only values[1, 2].

function filterNumbersFromArray(arr) {
  // Write the code that goes here
  for (let i = arr.length - 1; i >= 0; i--) {
    //   remember to reverse loop when getting next
    if (typeof arr[i] !== "number") {
      // typeof to sort on a loop by type
      arr.splice(i, 1);
    }
  }
}

var arr = [1, "a", "b", 2];

// filterNumbersFromArray(arr);

//
//
//

// DESCRIPTION
// Implement the findHobbyists function that takes an object consisting of
// peoples names mapped to their respective hobbies, and a hobby.The function
// should return an Array containing the names of the people(in any order)
// that enjoy the hobby.

// For example, the following code should display the name 'John'.

var hobbies = {
  John: ["Piano", "Puzzles", "Yoga"],
  Adam: ["Drama", "Yoga", "Pets"],
  Mary: ["Magic", "Pets", "Reading"]
};

function findHobbyists(hobbies, hobby) {
  let arr = [];

  for (let key in hobbies) {
    if (hobbies[key].includes(hobby)) {
      arr.push(key);
    }
  }
  return arr;
}

// console.log(findHobbyists(hobbies, "Yoga"));

//
//
//

// DESCRIPTION
// An image gallery is a set of images with corresponding remove
// buttons.This is the HTML code for a gallery with two images:

//     <div class="image">
//         <img src="https://goo.gl/kjzfbE" alt="First">
//          <button class="remove">X</button>
//      </div>
//      <div class="image">
//          <img src="https://goo.gl/d2JncW" alt="Second">
//          <button class="remove">X</button>
//      </div>

// Implement the setup function that registers a click event
// handler and implements the following logic: When the button of class
// remove is clicked, its parent <div> element should be removed from the gallery.

// For example, after the first image has been removed from the
// gallery above, it's HTML code should look like this:

//     <div class="image">
//       <img src="https://goo.gl/d2JncW" alt="Second">
//       <button class="remove">X</button>
//     </div>

function setup() {
  let ary = document.getElementsByClassName("remove");

  for (let el of ary) {
    el.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
      //   this is the el
      //   el.parentNode is the div
      //   this.parentNode.parentNode is the body
      //   .removeChild the div
    });
  }
}

// setup();

//
//
//

// DESCRIPTION
// Write a setup function that registers a click handler and implements
// the following logic:

// When clicked the button with the ID "btn" is hidden.
// One second after the click, the button reappears.

function setup2() {
  // Write your code here.

  let button = document.getElementById("btn");
  button.addEventListener("click", function() {
    button.style.display = "none";
    // style.attribute = "string of the style name"
    setTimeout(function() {
      button.style.display = "block";
    }, 1000);
  });
}

// setup2();

//
//
//

// DESCRIPTION
// Implement the ensure function so that it throws an error if called
// without arguments or the argument is undefined.Otherwise it should
// return the given value.

function ensure(value) {
  // an argument that is not sent will === undefined
  if (value === undefined) throw new Error();
  return value;
}

//
//
//

// DESCRIPTION
// Write a function update that increases the value of the progress bar
// with the id loading - bar, by the amount of increase.

// If the update function increases the value greater than the progress
// bar's max, then the value should be set to max. The update function
// should return true if the value is at the maximum, and false if not.

function update(increase) {
  let bar = document.getElementById("loading-bar");
  //   bar.attribute just like an object
  let toIncrease = bar.value + increase;

  if (toIncrease < bar.max) {
    bar.value = toIncrease;
    return false;
  }
  bar.value = bar.max;
  return true;
}

// console.log(update(50));
// console.log(update(50));

//
//
//

// DESCRIPTION
// Modify the implementation of the Snapshot class so that an array stored in
// the snapshot is not affected by modifications to either the original or restored array.

class Snapshot {
  constructor(array) {
    this.array = array.slice();
    // the .slice() makes a copy of the original array
  }

  restore() {
    return this.array.slice();
    // returns a copy of the original copy
  }
}

// var array = [1, 2];
// var snap = new Snapshot(array);
// array[0] = 3;
// array = snap.restore();
// console.log(array.join()); //It should log "1,2"
// array.push(4);
// array = snap.restore();
// console.log(array.join()); //It should log "1,2"

//
//
//

// DESCRIPTION
// Write a function calcAvgHeight which calculates average person height.
// The function takes only one argument, which is an object whose properties are
// instances of a person class created with the following function:

function Person(h, w) {
  this.height = h;
  this.weight = w;
}

// Given an object data, return the calculated average height.
// If there are no persons in the data object, return null.

// For example, the following call should return (174 + 190) / 2=182:

function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null
  let total = 0;

  for (let key in data) {
    total += data[key]["height"];
  }

  if (Object.keys(data).length === 0) {
    return null;
  }
  return total / Object.keys(data).length;
}

var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});

// console.log(avgHeight);

//
//
//

// DESCRIPTION
// Complete the setup function implementation, which moves the clicked
// element to the first place in the list.

// For example, if item B is clicked in the list below, the list should
// be reordered, resulting in the following order: B, A, and C.

// < ul >
//     <li>A</li>
//     <li>B</li>
//     <li>C</li>
// </ul >

function setup3() {
  let arr = document.querySelectorAll("li");
  for (let el of arr) {
    el.addEventListener("click", function() {
      let p = el.parentNode;
      p.removeChild(el);
      p.insertBefore(el, p.firstChild);
    });
  }
}

// setup3();

//
//
//

// DESCRIPTION
// Fix the bugs in the registerHandlers function.An alert should
// display anchor's zero-based index within a document instead of following the link.

// For example, in the document below, the alert should display "2"
// when Google anchor is clicked since it is the third anchor element
// in the document and its zero - based index is 2.

//     < body >
//         In my life, I used the following web search engines: <br />
//         <a href="//www.yahoo.com">Yahoo!</a> <br />
//         <a href="//www.altavista.com">AltaVista</a> <br />
//         <a href="//www.google.com">Google</a> <br />
//     </body >

// function registerHandlers() {
//   var as = document.getElementsByTagName("a");

//   for (var i = 0; i < as.length; i++) {
//     as[i].onclick = function() {
//       alert(i);

//       return false;
//     };
//   }
// }

function getHandler(index) {
  return function() {
    alert(index);
    return false;
  };
}

function registerHandlers() {
  var as = document.getElementsByTagName("a");
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = getHandler(i);
    // send to new function to keep i the same as i otherwise it
    // updates every click with i's new value
    // Closures
  }
}

// registerHandlers();

//
//
//

// DESCRIPTION
// Write a function appendRow that appends a table row to the
// table with ID "tbl".The appended row should have the same
// number of cells as the last row in that table.

// For example, after appending a row to the table below, the
// table should have 2 rows where each row has 2 cells.

// <table id = "tbl" border = "1" >
//     <tbody>
//         <tr>
//             <td></td>
//             <td></td>
//         </tr>
//     </tbody>
// </table >

function appendRow() {
  let lastRow = document.getElementById("tbl").lastElementChild
    .lastElementChild;

  let newElement = document.createElement("tr");

  newElement.innerHTML = lastRow.innerHTML;

  lastRow.parentNode.insertBefore(newElement, lastRow.nextSibling);
}

// appendRow();

//
//
//

// DESCRIPTION
// Implement the function sortByPriceAscending, which:

// Accepts a string in JSON format, as in the example below.
// Orders items by price in ascending order.
// If two products have the same price, it orders them by their name in alphabetical order.
// Returns a string in JSON format that is equivalent to the one in the input format.
// For example, the call

// sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]');
// should return

// '[{"name":"eggs","price":1},{"name":"rice","price":4.04},{"name":"coffee","price":9.99}]'

function sortByPriceAscending(jsonString) {
  var products = JSON.parse(jsonString);
  products.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });
  return JSON.stringify(products);
}

// console.log(
//   sortByPriceAscending(
//     '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
//   )
// );

//
//
//

// DESCRIPTION
// Write a function generateNewFolderName(existingFolders) that receives an
// array of folder names and returns a generated unique folder name using the following rules:

// If there is no folder with the name "New Folder" in the array, then
// "New Folder" is returned.

// If there is a folder with the name "New Folder" and there is no folder
// with the name "New Folder (2)", then "New Folder (2)" is returned("New Folder (1)" is never used).

// The N value of "New Folder (N)" should be incremented by 1 until a unique folder name is found.

// For example, generateNewFolderName(["New Folder"]) should return "New Folder (2)".

function generateNewFolderName(existingFolders) {
  var counter = 1;
  var currentName = "New Folder";
  while (existingFolders.includes(currentName)) {
    counter++;
    currentName = "New Folder (" + counter + ")";
  }
  return currentName;
}

console.log(generateNewFolderName(["New Folder"]));

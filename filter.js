function search() {
  // Get the search input element value
  let searchInput = document.getElementById('searchInput').value.trim().toUpperCase();

  // Get all product elements
  let products = document.querySelectorAll('.product');

  // Loop through each product
  products.forEach(product => {
      // Get the product name element (h2) and its text content
      let productName = product.querySelector('h2');
      let nameText = productName.innerText.toUpperCase();

      // Check if the product name (location) includes the search term
      if (nameText.includes(searchInput)) {
          // If it includes the term, display the product
          product.style.display = "";
      } else {
          // If it doesn't include the term, hide the product
          product.style.display = "none";
      }
  });
  return false;
}

  
  function applyFilters() {
    // Get the selected date and location from the filters
    let selectedDate = document.getElementById('dateFilter').value;
    let selectedLocation = document.getElementById('locationFilter').value;
    let selectedPrice = document.getElementById('num');

         
         
         // Get all product elements
         let products = document.querySelectorAll('.product');
         
         // Loop through each product
         products.forEach(product => {
           let productDate = product.dataset.date; // Assuming you have a data-date attribute on each product element
           let productLocation = product.querySelector('h2').textContent;
           let productPrice = product.querySelector('h3').textContent;
  
      // Check if the product matches the selected filters (if any are selected)
      let isDisplayed = true;
      if (selectedDate && productDate !== selectedDate) {
        isDisplayed = false; // Hide if date doesn't match
      }
      if (selectedLocation && productLocation !== selectedLocation) {
        isDisplayed = false; // Hide if location doesn't match
      }
      if (selectedPrice && productPrice !== selectedPrice) {
                isDisplayed = false; // Hide if location doesn't match
               }
  
      // Update product display based on filter results
      product.style.display = isDisplayed ? "" : "none";
    });
 }

 
  const content = document.querySelector('#num');

const Increment = () =>{
    let value = parseInt(content.innerHTML);
    value = value +5000;
    content.innerHTML = value;

}

const Decrement = () =>{
    let value = parseInt(content.innerHTML);
    value = value -5000;
    content.innerHTML = value;

}

function change(clickedButton) {
  // Remove the 'active' class from all buttons first
  let buttons = document.querySelectorAll('.booking');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Add the 'active' class to the clicked button
  clickedButton.classList.add('active');
}



  // Attach event listeners to search and apply filter button
  document.getElementById('submit-btn').addEventListener('click', applyFilters);
  document.getElementById('submit').addEventListener('click', search);
// Fade out the loader and display page content after 1 second
setTimeout(function() {
     // Fade out the loader
     document.querySelector('.loader').style.opacity = '0';
     
     // After 0.5s (time for fading out), hide loader and show page content
     setTimeout(function() {
         // Hide the loader completely
         document.querySelector('.loader').style.display = 'none';
         
         // Show the page content and fade it in
         const pageContent = document.querySelector('.page-content');
         pageContent.style.display = 'flex';  // Display page content
         pageContent.style.opacity = '1';  // Fade in page content
     }, 500);  // Wait for the loader to fade out (1 second)
 }, 1000);  // Initial delay before starting fade-out of loader
 
 // Function to show items based on the selected category
 function showCategory(category) {
     // Hide all categories first
     const allCategories = document.querySelectorAll('.category');
     allCategories.forEach(categoryElement => {
         categoryElement.style.display = 'none';
     });
 
     // Show the selected category
     const selectedCategory = document.querySelector(`.${category}-items`);
     if (selectedCategory) {
         selectedCategory.style.display = 'block';  // Display the selected category items
     }
 }
 

 document.addEventListener('DOMContentLoaded', function () {
     const buttons = document.querySelectorAll('.category-buttons button');
 
     buttons.forEach(button => {
         button.addEventListener('click', function () {
             // Reset styles for all buttons
             buttons.forEach(btn => {
                 btn.style.backgroundColor = '#008CFF'; // original blue
                 btn.style.color = 'white';
                 btn.style.border = 'none';
             });
 
             // Style the selected button
             this.style.backgroundColor = 'white';
             this.style.color = '#008CFF';
             this.style.border = '1px solid #008CFF'; // blue border
         });
     });
 });
 showCategory('appetizers')
 function sortCategoryItemsAZ(categoryClassName) {
    const category = document.querySelector(`.category.${categoryClassName}`);
    if (!category) return;

    const items = Array.from(category.querySelectorAll('.menu-item'));

    items.sort((a, b) => {
        const nameA = a.querySelector('h3').textContent.toLowerCase();
        const nameB = b.querySelector('h3').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    items.forEach(item => category.appendChild(item)); // Re-append sorted items
}

// Example: sort the Hookah category when the page loads
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('appetizers-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('hookah-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('desserts-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('entrees-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('pizza-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('burger-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('salads-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('hot_drinks-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('cold_drinks-items');});
document.addEventListener('DOMContentLoaded', () => {sortCategoryItemsAZ('milkshakes');});


// Get elements
const counterElement = document.querySelector('.counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const stepValueInput = document.getElementById('stepValue');

let counter = 0; // Initial counter value

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = counter;
}

// Event listeners
incrementButton.addEventListener('click', () => {
    const stepValue = parseInt(stepValueInput.value) || 1; // Default to 1 if input is invalid
    counter += stepValue;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    const stepValue = parseInt(stepValueInput.value) || 1; // Default to 1 if input is invalid
    counter -= stepValue;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0; // Reset the counter to 0
    updateCounter();
});

// Initialize the counter display
updateCounter();

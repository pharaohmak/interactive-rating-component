const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const submitBtn = document.getElementById('submit');
const rateBtns = document.querySelectorAll('.rate-btn');
const selectedText = document.getElementById('selected-rating');
let ratingValue = null;

// Handle Rating Selection
rateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        rateBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        ratingValue = btn.textContent;
    });
});

// Handle Submit Button
submitBtn.addEventListener('click', () => {
    if (ratingValue) {
        selectedText.textContent = ratingValue;
        ratingState.classList.add('hidden');
        thankYouState.style.display = 'block';
    } else {
        alert("Please select a rating before submitting!");
    }
});
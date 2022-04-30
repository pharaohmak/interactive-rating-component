const submit = document.querySelector('.submit');
const card_content_1 = document.querySelector('.rating-state');
const card_content_2 = document.querySelector('.thank-you-state');
const rating = document.querySelectorAll('.rating-btn');
const score = document.getElementById('selected-rating');
let star_score;

submit.addEventListener('click', onSubmit);
rating.forEach(btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
    card_content_1.classList.add('hide');
    score.textContent = star_score;
    card_content_2.classList.remove('hide');
}

function handleRatingBtnClick(event) {
    rating.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    if (event.target.classList.contains('rating-btn')) {
        event.target.classList.contains('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    star_score = event.target.textContent;
    console.log(star_score);
}
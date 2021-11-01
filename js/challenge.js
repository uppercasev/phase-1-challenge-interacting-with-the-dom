window.addEventListener('DOMContentLoaded', function () {
    const counterDisplay = document.querySelector('#counter');
    let counterNumber = 0;
    let intervalId = setInterval(counterFunction, 1000);
        
    function counterFunction() {
        counterNumber++
        counterDisplay.innerHTML = counterNumber;
    }

    const minusButton = document.querySelector('#minus');
    const plusButton = document.querySelector('#plus');
    const heartButton = document.querySelector('#heart');
    const pauseButton = document.querySelector('#pause');
    
    minusButton.addEventListener('click', function() {
        counterNumber = counterNumber - 1
        counterDisplay.innerHTML = counterNumber;
    });

    plusButton.addEventListener('click', function() {
        counterNumber = counterNumber + 1
        counterDisplay.innerHTML = counterNumber;
    });

    const likesList = document.querySelector('.likes');
    const counterLikes = []

    heartButton.addEventListener('click', function() {
        let likedNumber = counterNumber;
        let likesStatement;
        if (counterLikes.hasOwnProperty(likedNumber) === false) {
            counterLikes[likedNumber] = 1;
        } else {
            counterLikes[likedNumber] = counterLikes[likedNumber] + 1;
        }
        likesList.innerHTML = "";
        for (const number in counterLikes) {
            if (counterLikes[number] < 2) {
                likesStatement = `${number} has been liked ${counterLikes[number]} time`;
            } else {
                likesStatement = `${number} has been liked ${counterLikes[number]} times`;
            }
            const listItem = document.createElement('li');
            listItem.innerHTML = likesStatement;
            likesList.appendChild(listItem);
        }
    });

    const commentForm = document.querySelector('#comment-form');
    const commentSubmitButton = document.querySelector('#submit');
    const commentList = document.querySelector('#list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newComment = document.querySelector('#comment-input');
        const listItem = document.createElement('p');
        listItem.innerHTML = newComment.value;
        commentList.appendChild(listItem);
        newComment.value = "";
    });

    let playButton = true
   
    pauseButton.addEventListener('click', function() {
        if (playButton === true) {
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
            commentSubmitButton.disabled = true;
            playButton = false;
            pauseButton.innerHTML = "resume";
            clearInterval(intervalId);
        } else {
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
            commentSubmitButton.disabled = false;
            playButton = true;
            pauseButton.innerHTML = "pause";
            intervalId = setInterval(counterFunction, 1000);
        }
    });
});
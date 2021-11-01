window.addEventListener('DOMContentLoaded', function () {
    const counterDisplay = document.querySelector('#counter');
    let counterNumber = 0;
    setInterval(counterFunction, 1000);
    
    function counterFunction() {
        counterNumber++
        counterDisplay.innerHTML = counterNumber;
    };

    const minusButton = document.querySelector('#minus');
    const plusButton = document.querySelector('#plus');
    const heartButton = document.querySelector('#heart');
    const pauseButton = document.querySelector('#pause');
    
    minusButton.addEventListener('click', function() {
        counterNumber = counterNumber - 1
        counterDisplay.innerHTML = counterNumber;
    })

    plusButton.addEventListener('click', function() {
        counterNumber = counterNumber + 1
        counterDisplay.innerHTML = counterNumber;
    })

    const likesList = document.querySelector('.likes');
    const counterLikes = {}

    heartButton.addEventListener('click', function() {
        let likedNumber = counterNumber;
        let likesStatement;
        if (counterLikes.hasOwnProperty(likedNumber) === false) {
            counterLikes[likedNumber] = 1;
        } else {
            counterLikes[likedNumber] = counterLikes[likedNumber] + 1;
        };    
        if (counterLikes[likedNumber] < 2) {
            likesStatement = `${likedNumber} has been liked ${counterLikes[likedNumber]} time`;
        } else {
            likesStatement = `${likedNumber} has been liked ${counterLikes[likedNumber]} times`;
        }
        const listItem = document.createElement('li');
        listItem.innerHTML = likesStatement;
        likesList.appendChild(listItem);
    })

    const commentForm = document.querySelector('#comment-form')
    const commentList = document.querySelector('#list');
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newComment = document.querySelector('#comment-input');
        const listItem = document.createElement('<p>');
        listItem.innerHTML = newComment;
        commentList.appendChild(listItem);
    })
})

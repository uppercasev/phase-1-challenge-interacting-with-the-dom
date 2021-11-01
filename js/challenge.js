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

    heartButton.addEventListener('click', function() {
        const likesList = document.querySelector('.likes');
        let likesCount;
        let likesStatement = function() {
            if (likesCount < 2) {
                likeStatement = `<li>${countNumber} has been liked ${likesCount} time</li>`;
            } else {
                likeStatement = `<li>${countNumber} has been liked ${likesCount} times</li>`;
            }
        }
        likesList.appendChild = likesStatement;
    })
})

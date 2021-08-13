 

 

const timeLeft = document.getElementById('time-left')

//month day year
const birthday = new Date('08/17/2021')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {
  const today = new Date()
  const timeSpan = birthday - today
  //milliseconds
  console.log(timeSpan)

  if (timeSpan <= -day) {
    timeLeft.innerHTML = 'Hope you had a nice Birthday!!'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML = 'Happy Birthday!!'
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML =
    days + ' ' + 'Days' + ' ' + hours + ' ' + 'Hours' +  ' ' + minutes + ' ' + 'Minutes' + ' ' + seconds + ' ' + 'Seconds'
}

timerId = setInterval(countDown, second)



let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });




        const timeLeft2 = document.getElementById('nauman')

//month day year
const birthday1 = new Date('08/18/2021')

const second1 = 1000
const minute1 = second1 * 60
const hour1 = minute1 * 60
const day1 = hour1 * 24
let timerId1

function countDown1() {
  const today1 = new Date()
  const timeSpan = birthday1 - today1
  //milliseconds
  console.log(timeSpan)

  if (timeSpan <= -day1) {
    timeLeft2.innerHTML = 'Hope you had a nice Birthday!!'
    clearInterval(timerId1)
    return
  }

  if (timeSpan <= 0) {
    timeLeft2.innerHTML = 'Happy Birthday!!'
    clearInterval(timerId1)
    return
  }


  const days1 = Math.floor(timeSpan / day1)
  const hours1 = Math.floor((timeSpan % day1) / hour1)
  const minutes1 = Math.floor((timeSpan % hour1) / minute1)
  const seconds1 = Math.floor((timeSpan % minute1) / second1)

  timeLeft2.innerHTML =
    days1 + ' ' + 'Days' + ' ' + hours1 + ' ' + 'Hours' +  ' ' + minutes1 + ' ' + 'Minutes' + ' ' + seconds1 + ' ' + 'Seconds'
}

timerId1 = setInterval(countDown1, second1)





function ageinDays() {
    let birthYear = prompt("In Which Year do you Born?");
    let CURRENT_YEAR = 2020;
    let ageInDays = (CURRENT_YEAR - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You Are ' + ageInDays + ' Days Old...');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

// FOR RESET Button
function reset() {
    document.getElementById('ageInDays').remove();
}
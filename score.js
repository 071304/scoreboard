let countEl = document.getElementById('count-el');
let count = 0;



function incrementHome1() { 
  count = count + 1; 
  countEl.textContent = count;
}

function incrementHome2() { 
  count = count + 2;
  countEl.textContent = count;
}

function incrementHome3() {
  count += 3;
  countEl.textContent = count;
}

let guestEl = document.getElementById('guest-el');
let guestScore = 0;

function increaseGuest1() { 
  guestScore += 1;
  guestEl.textContent = guestScore;
}

function increaseGuest2() { 
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function increaseGuest3() { 
  guestScore += 3;
  guestEl.textContent = guestScore;
}


let resetScore = count;
let reset = guestScore;

function newGame() { 
  count = 0;
  guestScore = 0; 
  countEl.textContent = resetScore;
  guestEl.textContent = reset;
}





 



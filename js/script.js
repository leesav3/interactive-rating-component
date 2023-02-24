const front = document.getElementById('front');
const back = document.getElementById('back');
const btn = document.getElementById('btn');

var nbrs = document.querySelectorAll(".numbers");

for (let i=0; i<nbrs.length; i++) {
    nbrs[i].addEventListener('click', processRating);
}

function processRating(e) {
    // first get rid of any old clicks
    for (let x=0; x<nbrs.length; x++) {
        nbrs[x].classList.remove('selected');
    }
    // now make the clicked number orange
    document.getElementById(e.target.id).classList.add('selected');

    // next activate the submit button
    btn.disabled = false;
    btn.classList.remove('disabled');

    // add the rating value to the thank you message
    document.getElementById("rating").textContent=e.target.id;
}

function handleFlip() {
    front.classList.toggle('flipped');
    back.classList.toggle('flipped');
  }

  btn.addEventListener('click', handleFlip);


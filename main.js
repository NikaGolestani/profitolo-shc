let wa = document.querySelector(".wa");
chwab();
function chwan() {
  wa.innerHTML = `<div class="row"><div class="d-block d-lg-none align-self-center col-1 arrow back"><i class="fa-solid fa-circle-chevron-left"></i></div><div class="col"><h3>Weather App</h3><img src="img/wa.png" class=" img-fluid rounded"><button class="launch-btn"><a href="https://bright-hotteok-ee5cee.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1"></div></div>
`;
  let back = document.querySelector(".back");
  back.addEventListener("click", chwab);
}
function chwab() {
  wa.innerHTML = ` <div class="row"><div class="d-block d-lg-none align-self-center col-1"></div><div class="col"><h3>Weather App</h3><p>I built a fully functioning React.js app. In this app I used Sass  instead of css so I would able to add dark/light mod easier .Also by using API(axios) I was able to show real-time information to my client.</p><button class="launch-btn"><a href="https://bright-hotteok-ee5cee.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1 arrow next"><i class="fa-solid fa-circle-chevron-right"></i></div></div>
`;
  let next = document.querySelector(".next");
  next.addEventListener("click", chwan);
}

let hny = document.querySelector(".hny");
chhnyb();
function chhnyn() {
  hny.innerHTML = `<div class="row"><div class="d-block d-lg-none align-self-center col-1 arrow back1"><i class="fa-solid fa-circle-chevron-left"></i></div><div class="col"><h3>Happy New Year</h3><img src="img/hny.png" class=" img-fluid rounded"><button class="launch-btn"><a href="https://flourishing-nasturtium-c5eada.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1"></div></div>
`;
  let back1 = document.querySelector(".back1");
  back1.addEventListener("click", chhnyb);
}
function chhnyb() {
  hny.innerHTML = ` <div class="row"><div class="d-block d-lg-none align-self-center col-1"></div><div class="col"><h3>Happy New Year</h3><p>In this project, I use my knowledge of HTML, CSS, and Javascript. By building this project, I improved my understanding of responsive web pages and Media queries.</p><button class="launch-btn"><a href="https://flourishing-nasturtium-c5eada.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1 arrow next1"><i class="fa-solid fa-circle-chevron-right"></i></div></div>
`;
  let next1 = document.querySelector(".next1");
  next1.addEventListener("click", chhnyn);
}

let ml = document.querySelector(".ml");
chmlb();
function chmln() {
  ml.innerHTML = `<div class="row"><div class="d-block d-lg-none align-self-center col-1 arrow back2"><i class="fa-solid fa-circle-chevron-left"></i></div><div class="col"><h3>Mastermind Game</h3><img src="img/ml.png" class=" img-fluid rounded"><button class="launch-btn"><a href="https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/001/074/299/original/projectone.html?1660294175" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1"></div></div>
`;
  let back2 = document.querySelector(".back2");
  back2.addEventListener("click", chmlb);
}
function chmlb() {
  ml.innerHTML = ` <div class="row"><div class="d-block d-lg-none align-self-center col-1"></div><div class="col"><h3>Mastermind Game</h3><p>With this project I improverd my react and js skills by challenging myself to make my ideas work.With sorting numbers I was able to write an algorithm for finding the digits in right and wrong positions.</p><button class="launch-btn"><a href="https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/001/074/299/original/projectone.html?1660294175" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1 arrow next2"><i class="fa-solid fa-circle-chevron-right"></i></div></div>
`;
  let next2 = document.querySelector(".next2");
  next2.addEventListener("click", chmln);
}

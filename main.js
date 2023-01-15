let wa = document.querySelector(".wa");
chwab();
function chwan() {
  wa.innerHTML = `<div class="row"><div class="d-block d-lg-none align-self-center col-1 arrow back"><i class="fa-solid fa-circle-chevron-left"></i></div><div class="col"><h3>Weather App</h3><img src="img/wa.png" class=" img-fluid rounded"><button class="launch-btn"><a href="https://effervescent-gingersnap-5c4e79.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1"></div></div>
`;
  let back = document.querySelector(".back");
  back.addEventListener("click", chwab);
}
function chwab() {
  wa.innerHTML = ` <div class="row"><div class="d-block d-lg-none align-self-center col-1"></div><div class="col"><h3>Weather App</h3><p>I built a Vanilla JavaScript weather app in SheCodes Plus, an advanced 8-week JavaScript coding workshop. Building upon my previously-gained knowledge, I also became skilled in Bootstrap, API’s, real-life development workflow, hosting, and advanced JavaScript. I combined all of these skills to create a fully-functioning weather app.</p><button class="launch-btn"><a href="https://effervescent-gingersnap-5c4e79.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1 arrow next"><i class="fa-solid fa-circle-chevron-right"></i></div></div>
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
  hny.innerHTML = ` <div class="row"><div class="d-block d-lg-none align-self-center col-1"></div><div class="col"><h3>Happy New Year</h3><p>In this project, I use my knowledge of HTML, CSS, and Javascript. Most of this project uses media queries as a way to have a responsive webpage so, by building this project, I improved my understanding of responsive web pages and Media queries.</p><button class="launch-btn"><a href="https://flourishing-nasturtium-c5eada.netlify.app/" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1 arrow next1"><i class="fa-solid fa-circle-chevron-right"></i></div></div>
`;
  let next1 = document.querySelector(".next1");
  next1.addEventListener("click", chhnyn);
}

let ml = document.querySelector(".ml");
chmlb();
function chmln() {
  ml.innerHTML = `<div class="row"><div class="d-block d-lg-none align-self-center col-1 arrow back2"><i class="fa-solid fa-circle-chevron-left"></i></div><div class="col"><h3>Melon Land</h3><img src="img/ml.png" class=" img-fluid rounded"><button class="launch-btn"><a href="https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/001/074/299/original/projectone.html?1660294175" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1"></div></div>
`;
  let back2 = document.querySelector(".back2");
  back2.addEventListener("click", chmlb);
}
function chmlb() {
  ml.innerHTML = ` <div class="row"><div class="d-block d-lg-none align-self-center col-1"></div><div class="col"><h3>Melon Land</h3><p>I entered the world of front-end development by gaining some knowledge in HTML, CSS, and JavaScript. I used my knowledge of these languages, along with my new skills in VS Code, to build a landing page about Melons. The page utilizes JavaScript functions to create user interaction.</p><button class="launch-btn"><a href="https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/001/074/299/original/projectone.html?1660294175" >Launch</a></button></div><div class="d-block d-lg-none align-self-center col-1 arrow next2"><i class="fa-solid fa-circle-chevron-right"></i></div></div>
`;
  let next2 = document.querySelector(".next2");
  next2.addEventListener("click", chmln);
}

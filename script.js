
var i = 0;
var txt = 'Fuad Hasan'; /* The text */
var bio = "A software Developer";
var speed = 150;
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
 }
async function typeWriter() {
  while (i < txt.length) {
    document.getElementById("nm").innerHTML += txt.charAt(i);
    i++;
    await sleep(150);
  }
  i = 0;
  speed = 100;
  bioWriter();
}
function bioWriter() {
    if (i < bio.length) {
      document.getElementById("bio").innerHTML += bio.charAt(i);
      i++;
      setTimeout(bioWriter, speed);
    }
  }

async function load(){
				await sleep(3000);
		document.getElementById("load").classList.toggle("done");
		
		typeWriter();
				
}


function abouttoggle(){
    document.getElementById("box").classList.toggle("active");
    document.getElementById("h1").classList.toggle("active");
    document.getElementById("bio").classList.toggle("active");
    document.getElementById("hint").classList.toggle("active");
    document.getElementById("hi").classList.toggle("active");
    document.getElementById("im").classList.toggle("active");
    //document.getElementsByTagName("body")[0].classList.toggle("active");
    document.getElementById("github").classList.toggle("active");
    document.getElementById("ig").classList.toggle("active");
    document.getElementById("fb").classList.toggle("active");
    document.getElementById("profile").classList.toggle("active");
    document.getElementById("contact-btn").classList.toggle("active");
    document.getElementById("subscribe-btn").classList.toggle("active");
    document.getElementById("wrapper").classList.toggle("active");
}
function contacttoggle(){
    document.getElementById('contactbox').classList.toggle('active');
    document.getElementById("github").classList.toggle("active");
    document.getElementById("ig").classList.toggle("active");
    document.getElementById("fb").classList.toggle("active");
    document.getElementById("profile").classList.toggle("active");
    document.getElementById("contact-btn").classList.toggle("active");
    document.getElementById("subscribe-btn").classList.toggle("active");
    document.getElementById("box").classList.toggle("active");
    document.getElementById("h1").style.opacity = 0;
    //document.getElementById("contact-btn").classList.toggle("active");
}

function subscribetoggle(){
    document.getElementById('subscribebox').classList.toggle('active');
    document.getElementById('cap').classList.toggle('active');
    document.getElementById("github").classList.toggle("active");
    document.getElementById("ig").classList.toggle("active");
    document.getElementById("fb").classList.toggle("active");
    document.getElementById("profile").classList.toggle("active");
    document.getElementById("contact-btn").classList.toggle("active");
    document.getElementById("subscribe-btn").classList.toggle("active");
    document.getElementById("box").classList.toggle("active");
    document.getElementById("h1").style.opacity = 0;
    //document.getElementById("contact-btn").classList.toggle("active");
}
function defaults2(){
    document.getElementById("h1").style.opacity = 1;
    document.getElementById("h1").classList.toggle("active");
    document.getElementById("hint").classList.toggle("active");
    document.getElementById("hi").classList.toggle("active");
    document.getElementById("bio").classList.toggle("active");
    document.getElementById("im").classList.toggle("active");
    document.getElementById('subscribebox').classList.toggle('active');
    document.getElementById('cap').classList.toggle('active');
    document.getElementById("wrapper").classList.toggle("active");
}
function defaults(){
    document.getElementById("h1").style.opacity = 1;
    document.getElementById("h1").classList.toggle("active");
    document.getElementById("hint").classList.toggle("active");
    document.getElementById("hi").classList.toggle("active");
    document.getElementById("bio").classList.toggle("active");
    document.getElementById("im").classList.toggle("active");
    document.getElementById('contactbox').classList.toggle('active');
    document.getElementById("wrapper").classList.toggle("active");
}

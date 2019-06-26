let money = 400;
let legit = 0;
let truckie = document.querySelector('#truk');
let bikie = document.querySelector('#bike');
let bikie2 = document.querySelector('#bike2');
let changehtml = document.querySelector('html');
let cratecounter = 0;
let storedcrate = 0;
let moneymake = 0;
var notyet = 1;
var endgame = 80;

let mony = document.querySelector('strong');
mony.textContent = 400;
let cooks = document.querySelector('#imag')
window.onload = function startRolling() {
cooks.style.transform = 'translate(0, 0) rotate(1000000030deg)'
}


// dd
if (confirm("Welcome to your new Cookie Factory. If you don't know how to play, click `OK`. Otherwise, click `Cancel` to skip ahead :)")) {
  alert('In this game, you use Dough to create cookies, then store and deliver your cookies through filling Boxes, Crates, then Trucks.');
  alert("If you run out of Dough on your first try, don't worry - there will always be a way to get your Dough back and finish the game!");
  alert('You can press the `Production` and `Upgrades` buttons to produce and upgrade more cookies as needed / applicable. Have fun!');
} else {
}
let filled = 0;
let maxfill = 4;
let name = prompt("Enter your name of choice");
let fillname = document.querySelector('#d');
let fillcancel = document.querySelector('b');
let fillcost = document.querySelector('s');
fillcost.textContent = maxfill;
let fillfirst = document.querySelector('q');
fillfirst.textContent = filled;
if (name == '') {
  fillname.textContent = '';
}
if (name == 'null') {
  fillname.textContent = '';
} else if (name) {
  fillname.textContent = name;
  fillcancel.textContent = '';
}

// cookies go up
let goupping = 1;
let cookies = 0;
let makecookies = 0;
let safety = 1;
let backcookies = 0;
let cookiesoh = document.querySelector('#c');
cookiesoh.textContent = cookies;
function ccount() {
  makecookies = makecookies + goupping;
  cookies = cookies + goupping;
  backcookies = backcookies + goupping;
  money = money - 1;
  cookiesoh.textContent = cookies;

}
// buy a box! //
let storedbox = 0;
let boxnumber = 0;
let boximage = document.querySelector('#box');

function buybox() {


  /// nono
  if (cookies >= 10) {
  boxnumber = boxnumber + 1;
  storedbox = storedbox + 1;
    backcookies = backcookies - 10;
  cookies = cookies - 10;
  cookiesoh.textContent = cookies;



// new sect
if (boxnumber == 1) {
  boximage.src="box1.jpg.PNG";
}
if (boxnumber == 2) {
  boximage.src="box2.jpg.PNG";
}
if (boxnumber == 3) {
  boximage.src="box3.jpg.PNG";
}
if (boxnumber == 4) {
  boximage.src="box4.jpg.PNG";
}
if (boxnumber == 5) {
  boximage.src="box5.jpg.PNG";
}
if (boxnumber == 6) {
  boximage.src="box6.jpg.PNG";
}
if (boxnumber == 7) {
  boximage.src="box7.jpg.PNG";
}
if (boxnumber == 8) {
  boximage.src="box8.jpg.PNG";
}
if (boxnumber == 9) {
  boximage.src="box9.jpg.PNG";
}
if (boxnumber == 10) {
  backcookies = backcookies + 10;
  cookies = cookies + 10;
  mony.textContent = money;
  boxnumber = boxnumber - 1;
  storedbox = storedbox - 1;
  cookiesoh.textContent = cookies;
}
// fin sect
}
}


//ooof
 let mouses = document.querySelector('#ms');
 let arrows = document.querySelector('#arrow');
 let mover = document.querySelector('.cents').addEventListener('click', autoclick);

let meepupdate = document.querySelector('mark');
let goforit = 0;
// jjj
let origcps = 0;
let meep = 25;
let done = 1;
let waitmeep = 25;
let cont = 15;
///


function autoclick() {
if (backcookies >= waitmeep) {
  goforit = goforit + 1;
  waitmeep = meep + cont;
  cont = cont + 5;
  done = done + 1;
}
if (goforit == 1) {
  mouses.classList.add('gocrazy');
} if (cookies >= meep) {
  backcookies = backcookies - meep;
  cookies = cookies - meep;
  origcps = origcps + 1;
  cookiesoh.textContent = cookies;
  setInterval(function(){



mony.textContent = money; }, 1);

if (done == 2) {
  meep = meep + cont;
  meepupdate.textContent = meep;
}

if (done >= 3) {
done = 1;
}

}
}
// da cookie

function increase() {
if (cookies >= 50) {
  backcookies = backcookies = 50;
  cookies = cookies - 50;
  mony.textContent = money;
  goupping = goupping + 1;
  cookiesoh.textContent = cookies;
}
}
function nice() {
  if (boxnumber >= 9) {
  cratecounter = cratecounter + 1;
  }
if (storedcrate == cratecounter) {

}
if (cratecounter == 1) {
if (boxnumber == 9) {
  truckie.src="onetruck1.png.png";
  bike2.src="trailer2.png.png";
  boximage.src="box0.jpg.PNG";
  boxnumber = 0;
  storedcrate++;
  filled = filled + 1;
  fillfirst.textContent = filled;
}
}


if (cratecounter == 2) {
if (boxnumber == 9) {
  truckie.src="onetruck2.png.png";
  bike2.src="trailer3.png.png";
  boximage.src="box0.jpg.PNG";
  boxnumber = 0;
  filled = filled + 1;
  fillfirst.textContent = filled;
  arrows.classList.remove('goslow');
  truckie.classList.remove('gomed');
  bike2.classList.remove('gobikes');
  bike.classList.remove('gobikerrrs');
}
if (cratecounter == maxfill) {
  confirm('You have finished a bike-load of cookies. Press the GREEN ARROW to send them on their way!')
  truckie.src="onetruck4.png.png";
    bike2.src="trailer3.png.png";
  boximage.src="box0.jpg.PNG";
  boxnumber= 0;
  legit = 1;
  cratecounter = 5;
  filled = 2;
  fillfirst.textContent = filled;
  arrows.classList.remove('goslow');
    truckie.classList.remove('gomed');

    bike2.classList.remove('gobikes');
    bike.classList.remove('gobikerrrs');
    setTimeout(changeback, 5000);
  function changeback() {
    filled = 0;
    fillfirst.textContent = filled;
}

}
}


if (cratecounter == 3) {
if (boxnumber == 9) {
  truckie.src="onetruck3.png.PNG";
  boximage.src="box0.jpg.PNG";
  boxnumber = 0;
  filled = filled + 1;
  fillfirst.textContent = filled;
}
}


if (cratecounter == 4) {
if (boxnumber == 9) {
  confirm('You have finished a truck-load of cookies. Press the GREEN ARROW to send them on their way!')
  truckie.src="onetruck4.png.png";
    bike2.src="trailer.png.png";
        bike.src="big.png.png";

  boximage.src="box0.jpg.PNG";
  boxnumber= 0;
  legit = 1;
  cratecounter = 5;
  filled = 4;
  fillfirst.textContent = filled;
  arrows.classList.remove('goslow');
  truckie.classList.remove('gomed');
  bike2.classList.remove('gobikes');
  bike.classList.remove('gobikerrrs');
    setTimeout(changeback, 3000);
  function changeback() {
    filled = 0;
    fillfirst.textContent = filled;
  }

}
}

}

function driving() {
  if (legit == 1) {
    legit = 0;
    truckie.classList.add('gomed');
    bike2.classList.add('gobikes');
    bike.classList.add('gobikerrrs');




  setTimeout(changetruk, 4990);
function changetruk() {

  truk.src = "onetruck0.png.png";
  moneymake = (Math.floor(Math.random() * 200));
  moneymake = moneymake + 200;
  alert('You earned ' + moneymake + ' Dough from your delivery. Well done!')
  money = money + moneymake;
  mony.textContent = money;
  moneymake = 0;
  cratecounter = 0;
  storedcrate = 0;
  arrows.classList.add('hoverr');
      bike2.src="trailer.png.png";
}
}
}

var infinityYes = true;
/// boxes load onto truck anyways
  setInterval(function(){
    if(infinityYes === true) {
    if (money <= 3) {
      alert('Oh no! You ran out of dough. Here is an extra 200 to get you started again, courtesy of the Cookie Factory Protection Rights Agency.');
      money = money + 200;
    }
mony.textContent = money;} }, 1);
  setInterval(function(){
       if(infinityYes === true) {
        cookies = cookies + origcps;
    cookiesoh.textContent = cookies;} }, (1000));

function godmode() {
if (money < 1000) {
  alert('This upgrade costs 800 Dough :o');
}
if (money >= 1000) {
   changehtml.classList.add('goepic');
   if (endgame == 80) {
  alert('You won the game!! Thank you for playing. <3')
}
endgame = 3;
  var infinityYes = false;
    cookies = Number.POSITIVE_INFINITY;
    backcookies = Number.POSITIVE_INFINITY;
    money = Number.POSITIVE_INFINITY;


}

}

function bikebought() {
  console.log(money);
  if (money < 500) {
    if (notyet == 1) {
    alert('This upgrade costs 500 Dough :o');
  }
  if (notyet == 2) {
    alert('You have already bought this upgrade!');
  }
  }
  if (money >= 500) {
    if (notyet == 2) {
      alert('You have already bought this upgrade!');
    }
    if (notyet == 1) {
    maxfill = 2;
    fillcost.textContent = maxfill;
     truckie.classList.add('gone');
    bikie.classList.add('here');
    bikie2.classList.add('here2');
    arrows.classList.add('movearrow');
     money = money - 500;
     notyet = 2;
   }
  }
  }

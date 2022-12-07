var posCounter = 0;
var blockColors = ["#CF4D6F", "#1d645b", "#3D5A80" ,"47487a", "#8B5A17", "#312F3C", "#C2161D"]
var setId = "set" + 1;


const blocks = document.getElementsByClassName("shuffleBlocks");
const blocks2 = document.getElementsByClassName("shuffleBlocks2");
const sets = document.getElementById("set");


// https://bobbyhadz.com/blog/javascript-set-position-of-element Altered code from 
function positionElement(el, x, y) {
    el.style.position = 'absolute';
    el.style.left = x +'px';
    el.style.top = y + 'px';
  }

console.log(positionElement(blocks[0], 0, 0));
console.log(positionElement(blocks[1], 240 , 0));
console.log(positionElement(blocks[2], 480, 0));
console.log(positionElement(blocks[3], 0 , 240));
console.log(positionElement(blocks[4], 240 , 240));
console.log(positionElement(blocks[5], 480 , 240));
console.log(positionElement(blocks[6], 0  , 480));
console.log(positionElement(blocks[7], 240 , 480));
console.log(positionElement(blocks[8], 480 , 480));

$("#set2").hide();

//initial blockset2 positions
console.log(positionElement(blocks2[0], 0, 0));
console.log(positionElement(blocks2[1], 120 , 0));
console.log(positionElement(blocks2[2], 240, 0));
console.log(positionElement(blocks2[3], 360 , 0));
console.log(positionElement(blocks2[4], 480, 0));
console.log(positionElement(blocks2[5], 600 , 0));
console.log(positionElement(blocks2[6], 0, 120));
console.log(positionElement(blocks2[7], 120 , 120));
console.log(positionElement(blocks2[8], 240, 120));
console.log(positionElement(blocks2[9], 360 , 120));
console.log(positionElement(blocks2[10], 480, 120));
console.log(positionElement(blocks2[11], 600 , 120));

console.log(positionElement(blocks2[12], 0, 240));
console.log(positionElement(blocks2[13], 120 , 240));
console.log(positionElement(blocks2[14], 240, 240));
console.log(positionElement(blocks2[15], 360 , 240));
console.log(positionElement(blocks2[16], 480, 240));
console.log(positionElement(blocks2[17], 600 , 240));
console.log(positionElement(blocks2[18], 0, 360));
console.log(positionElement(blocks2[19], 120 , 360));
console.log(positionElement(blocks2[20], 240, 360));
console.log(positionElement(blocks2[21], 360 , 360));
console.log(positionElement(blocks2[22], 480, 360));
console.log(positionElement(blocks2[23], 600 , 360));

console.log(positionElement(blocks2[24], 0, 480));
console.log(positionElement(blocks2[25], 120 , 480));
console.log(positionElement(blocks2[26], 240, 480));
console.log(positionElement(blocks2[27], 360 , 480));
console.log(positionElement(blocks2[28], 480, 480));
console.log(positionElement(blocks2[29], 600 , 480));
console.log(positionElement(blocks2[30], 0, 600));
console.log(positionElement(blocks2[31], 120 , 600));
console.log(positionElement(blocks2[32], 240, 600));
console.log(positionElement(blocks2[33], 360 , 600));
console.log(positionElement(blocks2[34], 480, 600));
console.log(positionElement(blocks2[35], 600 , 600));
$("#swap").on("click", shuffle)
$("#swap2").on("click", sort)
$("#setChange").on("click", blockSet)


function blockSet() {  
  console.log(setId);
  if (setId == "set1"){
    console.log(setId);
    $("#set2").hide();
    $(set1).fadeIn();
    setId = "set" + 2;
    console.log(setId);

  } else if (setId == "set2") {
    console.log(setId);
    $("#set1").hide();
    $(set2).fadeIn();
    setId = "set" + 1;
 }
  
}

function shuffle(){
  while (posCounter < blocks.length){
    var randomNum = Math.floor((Math.random() * blocks.length));
    var randomNum2 = Math.floor((Math.random() * blocks.length));
    var randomNum3 = Math.floor((Math.random() * blocks.length));
    var randomNum4 = Math.floor((Math.random() * blocks.length));
    var randomNum5 = Math.floor((Math.random() * blocks.length));
    var randomNum6 = Math.floor((Math.random() * blocks.length));
    var randomNum7 = Math.floor((Math.random() * blocks.length));
    var randomNum8 = Math.floor((Math.random() * blocks.length));
    var randomNum9 = Math.floor((Math.random() * blocks.length));
    
    var randomNum10 = Math.floor((Math.random() * blocks2.length));
    var randomNum11 = Math.floor((Math.random() * blocks2.length));
    var randomNum12 = Math.floor((Math.random() * blocks2.length));
    var randomNum13 = Math.floor((Math.random() * blocks2.length));
    var randomNum14 = Math.floor((Math.random() * blocks2.length));
    var randomNum15 = Math.floor((Math.random() * blocks2.length));
    var randomNum16 = Math.floor((Math.random() * blocks2.length));

    var randomNum17 = Math.floor((Math.random() * blocks2.length));
    var randomNum18 = Math.floor((Math.random() * blocks2.length));
    var randomNum19 = Math.floor((Math.random() * blocks2.length));
    var randomNum20 = Math.floor((Math.random() * blocks2.length));
    var randomNum21 = Math.floor((Math.random() * blocks2.length));
    var randomNum22 = Math.floor((Math.random() * blocks2.length));
    var randomNum23 = Math.floor((Math.random() * blocks2.length));

    var randomNum24 = Math.floor((Math.random() * blocks2.length));
    var randomNum25 = Math.floor((Math.random() * blocks2.length));
    var randomNum26 = Math.floor((Math.random() * blocks2.length));
    var randomNum27 = Math.floor((Math.random() * blocks2.length));
    var randomNum28 = Math.floor((Math.random() * blocks2.length));
    var randomNum29 = Math.floor((Math.random() * blocks2.length));
    var randomNum30 = Math.floor((Math.random() * blocks2.length));

    var randomNum31 = Math.floor((Math.random() * blocks2.length));
    var randomNum32 = Math.floor((Math.random() * blocks2.length));
    var randomNum33 = Math.floor((Math.random() * blocks2.length));
    var randomNum34 = Math.floor((Math.random() * blocks2.length));
    var randomNum35 = Math.floor((Math.random() * blocks2.length));
    var randomNum36 = Math.floor((Math.random() * blocks2.length));

    var randomNum37 = Math.floor((Math.random() * blocks2.length));
    var randomNum38 = Math.floor((Math.random() * blocks2.length));
    var randomNum39 = Math.floor((Math.random() * blocks2.length));
    var randomNum40 = Math.floor((Math.random() * blocks2.length));
    var randomNum41 = Math.floor((Math.random() * blocks2.length));
    var randomNum42 = Math.floor((Math.random() * blocks2.length));

    var randomNum43 = Math.floor((Math.random() * blocks2.length));
    var randomNum44 = Math.floor((Math.random() * blocks2.length));
    var randomNum45 = Math.floor((Math.random() * blocks2.length));

    console.log(positionElement(blocks[randomNum], 240 , 240));
    console.log(positionElement(blocks[randomNum2], 0 , 480));
    console.log(positionElement(blocks[randomNum3], 0, 0));
    console.log(positionElement(blocks[randomNum4], 480 , 480));
    console.log(positionElement(blocks[randomNum5], 240 , 480));
    console.log(positionElement(blocks[randomNum6], 480 , 240));
    console.log(positionElement(blocks[randomNum7], 480 , 0));
    console.log(positionElement(blocks[randomNum8], 0 , 240));
    console.log(positionElement(blocks[randomNum9], 240 , 0));

    console.log(positionElement(blocks2[randomNum37], 0, 0));
    console.log(positionElement(blocks2[randomNum38], 120 , 0));
    console.log(positionElement(blocks2[randomNum39], 240, 0));
    console.log(positionElement(blocks2[randomNum40], 360 , 0));
    console.log(positionElement(blocks2[randomNum41], 480, 0));
    console.log(positionElement(blocks2[randomNum42], 600 , 0));
    console.log(positionElement(blocks2[randomNum43], 0, 120));
    console.log(positionElement(blocks2[randomNum44], 120 , 120));
    console.log(positionElement(blocks2[randomNum45], 240, 120));
    console.log(positionElement(blocks2[randomNum10], 360 , 120));
    console.log(positionElement(blocks2[randomNum11], 480, 120));
    console.log(positionElement(blocks2[randomNum12], 600 , 120));

    console.log(positionElement(blocks2[randomNum13], 0, 240));
    console.log(positionElement(blocks2[randomNum14], 120 , 240));
    console.log(positionElement(blocks2[randomNum15], 240, 240));
    console.log(positionElement(blocks2[randomNum16], 360 , 240));
    console.log(positionElement(blocks2[randomNum17], 480, 240));
    console.log(positionElement(blocks2[randomNum18], 600 , 240));
    console.log(positionElement(blocks2[randomNum19], 0, 360));
    console.log(positionElement(blocks2[randomNum20], 120 , 360));
    console.log(positionElement(blocks2[randomNum21], 240, 360));
    console.log(positionElement(blocks2[randomNum22], 360 , 360));
    console.log(positionElement(blocks2[randomNum23], 480, 360));
    console.log(positionElement(blocks2[randomNum24], 600 , 360));

    console.log(positionElement(blocks2[randomNum25], 0, 480));
    console.log(positionElement(blocks2[randomNum26], 120 , 480));
    console.log(positionElement(blocks2[randomNum27], 240, 480));
    console.log(positionElement(blocks2[randomNum28], 360 , 480));
    console.log(positionElement(blocks2[randomNum29], 480, 480));
    console.log(positionElement(blocks2[randomNum30], 600 , 480));
    console.log(positionElement(blocks2[randomNum31], 0, 600));
    console.log(positionElement(blocks2[randomNum32], 120 , 600));
    console.log(positionElement(blocks2[randomNum33], 240, 600));
    console.log(positionElement(blocks2[randomNum34], 360 , 600));
    console.log(positionElement(blocks2[randomNum35], 480, 600));
    console.log(positionElement(blocks2[randomNum36], 600 , 600));
    posCounter++;

    $(".shuffleBlocks").css("background-color", blockColors[randomNum])
    $(".shuffleBlocks2").css("background-color", blockColors[randomNum])
    

  }
 
  posCounter = -1;
}

function sort(){
  console.log(positionElement(blocks[0], 0, 0));
  console.log(positionElement(blocks[1], 240 , 0));
  console.log(positionElement(blocks[2], 480, 0));
  console.log(positionElement(blocks[3], 0 , 240));
  console.log(positionElement(blocks[4], 240 , 240));
  console.log(positionElement(blocks[5], 480 , 240));
  console.log(positionElement(blocks[6], 0  , 480));
  console.log(positionElement(blocks[7], 240 , 480));
  console.log(positionElement(blocks[8], 480 , 480));

  console.log(positionElement(blocks2[0], 0, 0));
console.log(positionElement(blocks2[1], 120 , 0));
console.log(positionElement(blocks2[2], 240, 0));
console.log(positionElement(blocks2[3], 360 , 0));
console.log(positionElement(blocks2[4], 480, 0));
console.log(positionElement(blocks2[5], 600 , 0));
console.log(positionElement(blocks2[6], 0, 120));
console.log(positionElement(blocks2[7], 120 , 120));
console.log(positionElement(blocks2[8], 240, 120));
console.log(positionElement(blocks2[9], 360 , 120));
console.log(positionElement(blocks2[10], 480, 120));
console.log(positionElement(blocks2[11], 600 , 120));

console.log(positionElement(blocks2[12], 0, 240));
console.log(positionElement(blocks2[13], 120 , 240));
console.log(positionElement(blocks2[14], 240, 240));
console.log(positionElement(blocks2[15], 360 , 240));
console.log(positionElement(blocks2[16], 480, 240));
console.log(positionElement(blocks2[17], 600 , 240));
console.log(positionElement(blocks2[18], 0, 360));
console.log(positionElement(blocks2[19], 120 , 360));
console.log(positionElement(blocks2[20], 240, 360));
console.log(positionElement(blocks2[21], 360 , 360));
console.log(positionElement(blocks2[22], 480, 360));
console.log(positionElement(blocks2[23], 600 , 360));

console.log(positionElement(blocks2[24], 0, 480));
console.log(positionElement(blocks2[25], 120 , 480));
console.log(positionElement(blocks2[26], 240, 480));
console.log(positionElement(blocks2[27], 360 , 480));
console.log(positionElement(blocks2[28], 480, 480));
console.log(positionElement(blocks2[29], 600 , 480));
console.log(positionElement(blocks2[30], 0, 600));
console.log(positionElement(blocks2[31], 120 , 600));
console.log(positionElement(blocks2[32], 240, 600));
console.log(positionElement(blocks2[33], 360 , 600));
console.log(positionElement(blocks2[34], 480, 600));
console.log(positionElement(blocks2[35], 600 , 600));
  }



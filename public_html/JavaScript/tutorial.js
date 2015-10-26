/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*var imglinks = document.getElementById('imglinks').getElementsByTagName('a');
var imgs = document.getElementById('imgs').getElementsByTagName('img');
var i = 0;
var selectedImg = imgs[i];
for(var j in imglinks) {
    imglinks[j].addEventListener('click', showImage);
} 

function showImage() {
    clearInterval(interval);
    //alert(window.selectedImage + ", " + i);
    if(selectedImg !== undefined) {
        selectedImg.style.display = 'none';
    }
    imgid = this.getAttribute('data-img');
    i = parseInt(imgid.substr(-1));
    alert(i + ", " + imgid);
    selectedImg = document.getElementById(imgid); //this.attributes.data-img,  this.attributes["data-img"]
    selectedImg.style.display = 'block';
    interval = setInterval(changeImg, 1000);
}

var interval = setInterval(changeImg, 1000);
function changeImg() {
    // hide the old image
    if(selectedImg !== undefined) {
        selectedImg.style.display = 'none';
    }
    // find the new image
    selectedImg = nextImg();
    // show the new image
    selectedImg.style.display ='block';
}

function nextImg() {
    if(i == imgs.length-1) {
        i = 0;
    }
    else {
        i ++; 
    }
    selectedImage = imgs[i];
}

function start() {
    interval = setInterval(changeImg, 1000);
}
//document.addEventListener('load', changeImg);

*/

var i = 0;
var imglinks = document.getElementById('imglinks').getElementsByTagName('a');
var imgs = document.getElementById('imgs').getElementsByTagName('img');
var selectedImg = imgs[0];
var ani = true;
// when click in the link i, the image i shows.
for(var j in imglinks) {
    imglinks[j].addEventListener('mouseover', showImg);
    imglinks[j].addEventListener('mouseout', start);
    imglinks[j].addEventListener('click', switchAnim);
    //imglinks[j].addEventListener('click', showImg);
} 

function switchAnim() {
   ani = !ani; 
}

function showImg() {
    //console.log(i);
    //console.log(selectedImg.getAttribute('id'));
    clearTimeout(timer);
    clearInterval(interval);
    timer = false;
    selectedImg.style.display ='none';
    i = parseInt(this.getAttribute('data-img'));//parseInt()
    //console.log(i);
    selectedImg = imgs[i];
    //console.log(selectedImg.getAttribute('id'));
    selectedImg.style.display ='block';
    //console.log(i);
    //console.log(selectedImg.getAttribute('id'));
}

var timer, interval;
function start() {
    if(ani && !timer) {
        timer = setTimeout(startInt, 1000)
    }
}
function startInt() {
    interval = setInterval(changeImg, 1000);
}
function changeImg() {
    // hide the old image
    console.log(i);
    console.log(selectedImg.getAttribute('id'));
    selectedImg.style.display = 'none';
    // find the new image
    i = cycle();
    selectedImg = imgs[i];
    console.log(i);
    console.log(selectedImg.getAttribute('id'));
    // show the new image
    selectedImg.style.display ='block';
}

function cycle() {
    if(i == imgs.length-1) {
       return 0;
    }
    else {
        return i + 1;
    } 
}
/*
function times(t) {
    if(i == 0) {
        i ++;
    }
    return i*t;
}*/

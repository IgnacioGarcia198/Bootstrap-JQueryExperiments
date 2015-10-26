/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var imglinks = document.getElementById('imglinks').getElementsByTagName('a');
var selectedImg;
var imgs = document.getElementById('imgs').getElementsByTagName('img');
var i = 0;
for(var i in imglinks) {
    imglinks[i].addEventListener('click', showImage);
} 

function showImage() {
    if(selectedImg !== undefined) {
        selectedImg.style.display = 'none';
    }
    selectedImg = document.getElementById(this.getAttribute('data-img')); //this.attributes.data-img,  this.attributes["data-img"]
    selectedImg.style.display = 'block';
}

var myVar = setInterval(changeImg, 1000);
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



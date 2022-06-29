let photo = [
    'image/one.png',
    'image/two.png',
    'image/three.png',
    'image/four.png',
    'image/five.png',
    'image/six.png',
    'image/seven.png',
    'image/eight.png',
    'image/nine.png'
];

i = 0;
iMax = photo.length-1;


img = document.querySelector('#cats');
keyLeft = document.querySelector('#background-left');
keyRight = document.querySelector('#background-right');

defaultColor = 'rgb(146, 146, 146)';
defaultTabColor = 'rgb(143, 143, 143)';

nowTabColor = '#696969';

onClickColor = '#DCDCDC';
onEnterColor = '#808080';



/*all function*/

function imgRight() {
    if(i != 8) {
        i++;
    } else {
        i=0;
    }
    img.src=photo[i];
} //function for scrolling photo in right

function imgLeft() {
    if (i == 0) {
        i=8;
    } else {
        i--;
    }
    img.src=photo[i];
} //function for scrolling photo in left


function tabScrollLeft() {
    if (i != 8) {
        document.querySelector(`#tab${i+1}`).style.backgroundColor=defaultTabColor;
    } else {
        document.querySelector(`#tab0`).style.backgroundColor=defaultTabColor;
    }
    document.querySelector(`#tab${i}`).style.backgroundColor=nowTabColor;
} //function for change tab color in left

function tabScrollRight() {
    if (i != 0 ) {
        document.querySelector(`#tab${i-1}`).style.backgroundColor=defaultTabColor;
    } else {
        document.querySelector(`#tab${iMax}`).style.backgroundColor=defaultTabColor;
    }
    document.querySelector(`#tab${i}`).style.backgroundColor=nowTabColor;
} //function for change tab color in right

if (i == 0) {
    document.querySelector(`#tab${i}`).style.backgroundColor = nowTabColor;
} //do color when site is starting

/*-----------------------*/


/*Request in Key*/

img.addEventListener('mouseover', function () {
    keyLeft.style.backgroundColor = defaultColor;
    keyRight.style.backgroundColor = defaultColor;
}); //make default color if people ended click/implement key


keyRight.addEventListener('mouseover', function () {
    keyRight.style.backgroundColor = onEnterColor;
}); //access change color while people resolves key

keyLeft.addEventListener('mouseover', function () {
    keyLeft.style.backgroundColor = onEnterColor;
}); //access change color while people resolves key


keyLeft.addEventListener('mousedown', function () {
    keyLeft.style.backgroundColor = onClickColor;
    imgLeft();
    tabScrollLeft();
}); //if people click to key

keyRight.addEventListener('mousedown', function () {
    keyRight.style.backgroundColor = onClickColor;
    imgRight();
    tabScrollRight();
}); //if people click to key


keyRight.addEventListener('mouseup', function () {
    keyRight.style.backgroundColor = defaultColor;
}); //if people releases key

keyLeft.addEventListener('mouseup', function () {
    keyLeft.style.backgroundColor = defaultColor;
}); //if people releases key



//-----------------------------------------------------//
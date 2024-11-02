let i = 0
let r = function(){
    i += 1;
    console.log(i);
    if(i == 5) {
        window.clearInterval(d);
        console.log('end')
    }
};

let d = window.setInterval(r, 1000) ;

let col = ["red", "red", "white", "white", "white", "white", "white", "white", "white", "white", "white", "red"];
let col2 = ["white", "yellow", "white", "white", "white", "white", "white", "white", "white", "white", "yellow", "white"];
let col3 = ["white", "white", "white", "green", "green", "white", "green", "white", "green", "white", "green", "white"];
let ind = 0;

let changeCol = function() {
    let element = document.getElementById("AA0001AA");
    element.style.backgroundColor = col[ind];
    ind = (ind + 1) % col.length;
};

let changeCol2 = function() {
    let element = document.getElementById("AA0002AA");
    element.style.backgroundColor = col2[ind];
};

let changeCol3 = function() {
    let element = document.getElementById("AA0003AA");
    element.style.backgroundColor = col3[ind];
};

let int2 = setInterval(changeCol2, 1000);
let int1 = setInterval(changeCol, 1000);
let int3 = setInterval(changeCol3, 1000);

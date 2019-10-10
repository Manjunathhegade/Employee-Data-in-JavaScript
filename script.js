var agents = [
"<div class=\"agent\"><img src=\"images/David.jpg\"> <p>David</p></div>",
"<div class=\"agent\"><img src=\"images/John.png\"> <p>John</p></div>",
"<div class=\"agent\"><img src=\"images/Elizabeth.jpg\"> <p>Elizabeth</p></div>",
"<div class=\"agent\"><img src=\"images/Jonathan.jpg\"> <p>Jonathan</p></div>",
"<div class=\"agent\"><img src=\"images/Michael.jpg\"> <p>Michael</p></div>",
"<div class=\"agent\"><img src=\"images/Richard.jpg\"> <p>Richard</p></div>",
"<div class=\"agent\"><img src=\"images/Robert.jpg\"> <p>Robert</p></div>",
"<div class=\"agent\"><img src=\"images/Roshni.jpg\"> <p>Roshni</p></div>",
"<div class=\"agent\"><img src=\"images/sara.jpg\"> <p>Sara</p></div>",
"<div class=\"agent\"><img src=\"images/Sharon.jpg\"> <p>Sharon</p></div>",
];

var dstArr = [];

window.onload = function init() {
    var el1 = document.getElementById('source-grid');
    for (var i = 0; i < agents.length; i++) {
        el1.innerHTML += agents[i] + "<br/>";
    }
};

function renderAgents(){
    var el1 = document.getElementById('source-grid');
    var el2 = document.getElementById('dest-grid');
    el1.innerHTML = "";
    el2.innerHTML = "";
    for (var i = 0; i < agents.length; i++) {
        el1.innerHTML += agents[i] + "<br/>";
    }
    for (var i = 0; i < dstArr.length; i++) {
        el2.innerHTML += dstArr[i] + "<br/>";
    }
}

function onAssignClick() {
    if(agents.length > 0){
        dstArr.push(agents.pop());
        renderAgents();
    } else {
        alert("No more agents to assign!");
    }
}

function onRevokeClick() {
    if(dstArr.length > 0){
        agents.push(dstArr.pop());
        renderAgents();
    } else {
        alert("No more agents to revoke!");
    }
}
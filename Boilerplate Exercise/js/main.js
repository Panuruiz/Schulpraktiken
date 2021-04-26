// ------------------CANVAS------------------------------------------------
// ------------------------------------------------------------------------

var canvas = document.getElementById('canvas')
var kontext = canvas.getContext('2d');

// Background

kontext.fillStyle = '#401726';
kontext.beginPath();
kontext.moveTo(0, 0);
kontext.lineTo(0, 100)
kontext.lineTo(350, 100)
kontext.lineTo(350, 0)
kontext.fill();

// Buchstabe P

kontext.fillStyle = '#DFE5F2';
kontext.beginPath();
kontext.moveTo(0, 0);
kontext.lineTo(0, 100);
kontext.lineTo(30, 100);
kontext.lineTo(30, 60);
kontext.lineTo(80, 60);
kontext.lineTo(80, 60);
kontext.lineTo(80, 0);
kontext.lineTo(0, 0);
kontext.fill();
kontext.beginPath();
kontext.arc(80, 30, 30, -1.7, 0.5 * Math.PI);
kontext.fill();

kontext.fillStyle = '#401726';
kontext.beginPath();
kontext.moveTo(30, 20);
kontext.lineTo(80, 20);
kontext.lineTo(80, 40);
kontext.lineTo(30, 40);
kontext.fill();
kontext.beginPath();
kontext.arc(80, 30, 10, -1.7, 0.5 * Math.PI);
kontext.fill();

// Buchstabe N

kontext.fillStyle = '#BF4565';
kontext.beginPath();
kontext.moveTo(160, 0);
kontext.lineTo(200, 60);
kontext.lineTo(200, 0);
kontext.fill();
kontext.beginPath();
kontext.moveTo(160, 100);
kontext.lineTo(160, 40);
kontext.lineTo(200, 100);
kontext.fill();

// Buchstabe R

kontext.fillStyle = '#BF4565';
kontext.beginPath();
kontext.moveTo(240, 0);
kontext.lineTo(240, 100);
kontext.lineTo(270, 100);
kontext.lineTo(270, 60);
kontext.lineTo(310, 100);
kontext.lineTo(350, 100);
kontext.lineTo(310, 60);
kontext.lineTo(310, 0);
kontext.fill();

kontext.beginPath();
kontext.arc(310, 30, 30, -1.7, 0.5 * Math.PI);
kontext.fill();

kontext.fillStyle = '#401726';
kontext.beginPath();
kontext.moveTo(270, 20);
kontext.lineTo(310, 20);
kontext.lineTo(310, 40);
kontext.lineTo(270, 40);
kontext.fill();

kontext.beginPath();
kontext.arc(310, 30, 10, -1.7, 0.5 * Math.PI);
kontext.fill();

// ------ENDE CANVAS-----------------------------------------------------
//-----------------------------------------------------------------------

// Datum Sidebar

const datum = new Date();
var tag = datum.getDate();
var monat = datum.getMonth() + 1;
var jahr = datum.getFullYear();
if (monat < 10) {
    monat = '0' + monat;
}
if (tag < 10) {
    tag = '0' + tag;
}

document.getElementById("datum").innerHTML = 'Heute ist ' + tag + '.' + monat + '.' + jahr;
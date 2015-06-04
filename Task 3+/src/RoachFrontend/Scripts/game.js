var z1 = 0;
var z2 = 0;
var z3 = 0;
var z4 = 0;

tar = new Image();
tar.src = "/Scripts/tar.png";


function push() {

    z1 = Math.floor((Math.random() * 6) + 1);
    z2 = Math.floor((Math.random() * 6) + 1);
    z3 = Math.floor((Math.random() * 6) + 1);
    z4 = Math.floor((Math.random() * 6) + 1);

    if (pos1 > 1115) {
        z1 = 0;
    }
    if (pos2 > 1115) {
        z2 = 0;
    }
    if (pos3 > 1115) {
        z3 = 0;
    }
    if (pos4 > 1115) {
        z4 = 0;
    }

    pos1 = pos1 + 1 * z1;
    pos2 = pos2 + 1 * z2;
    pos3 = pos3 + 1 * z3;
    pos4 = pos4 + 1 * z4;

    setTimeout(push, 15);
}

var pos1 = 17;
var pos2 = 17;
var pos3 = 17;
var pos4 = 17;
var fin = 0;
var f1 = 0;
var f2 = 0;
var f3 = 0;
var f4 = 0;
var stop1 = 1;
var stop2 = 1;
var stop3 = 1;
var stop4 = 1;

function draw() {
    var canv = document.getElementById("example"),
        workspace = canv.getContext("2d");
    var move = 44;



    workspace.beginPath();
    workspace.fillStyle = "#98FB98";
    workspace.fillRect(15, 15, 1385, 485);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.font = 'bold 75px sans-serif';
    workspace.fillText("1", 1120, 100, 50);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.font = 'bold 75px sans-serif';
    workspace.fillText("2", 1120, 215, 50);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.font = 'bold 75px sans-serif';
    workspace.fillText("3", 1120, 340, 50);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.font = 'bold 75px sans-serif';
    workspace.fillText("4", 1120, 460, 50);
    //


    workspace.drawImage(tar, pos1, 45)
    workspace.drawImage(tar, pos2, 166);
    workspace.drawImage(tar, pos3, 284);
    workspace.drawImage(tar, pos4, 407);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(15, 15, 1385, 5);



    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(15, 495, 1385, 5);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(15, 15, 5, 485);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(1395, 15, 5, 485);
    //
    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(15, 250, 1100, 5);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(15, 130, 1100, 5);

    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(15, 370, 1100, 5);

    //Finish
    workspace.beginPath();
    workspace.fillStyle = "black";
    workspace.fillRect(1115, 15, 5, 485);
    //

    workspace.font = 'bold 30px sans-serif';

    if ((pos1 > 1115) && (stop1 != 0)) {
        fin++;
        f1 = fin;
        stop1 = 0;
    }

    if (f1 == 1) {
        workspace.fillText("ПИРВЫЙ", 50, 120, 200);
    }
    if (f1 == 2) {
        workspace.fillText("ФТАРОЙ", 50, 120, 200);
    }
    if (f1 == 3) {
        workspace.fillText("ТРИТИЙ", 50, 120, 200);
    }
    if (f1 == 4) {
        workspace.fillText("ОКРАЕННЫЙ", 50, 120, 200);
    }


    if ((pos2 > 1115) && (stop2 != 0)) {
        fin++;
        f2 = fin;
        stop2 = 0;
    }


    if (f2 == 1) {
        workspace.fillText("ПИРВЫЙ", 50, 240, 200);
    }
    if (f2 == 2) {
        workspace.fillText("ФТАРОЙ", 50, 240, 200);
    }
    if (f2 == 3) {
        workspace.fillText("ТРИТИЙ", 50, 240, 200);
    }
    if (f2 == 4) {
        workspace.fillText("ОКРАЕННЫЙ", 50, 240, 200);
    }


    if ((pos3 > 1115) && (stop3 != 0)) {
        fin++;
        f3 = fin;
        stop3 = 0;
    }


    if (f3 == 1) {
        workspace.fillText("ПИРВЫЙ", 50, 360, 200);
    }
    if (f3 == 2) {
        workspace.fillText("ФТАРОЙ", 50, 360, 200);
    }
    if (f3 == 3) {
        workspace.fillText("ТРИТИЙ", 50, 360, 200);
    }
    if (f3 == 4) {
        workspace.fillText("ОКРАЕННЫЙ", 50, 360, 200);
    }

    if ((pos4 > 1115) && (stop4 != 0)) {
        fin++;
        f4 = fin;
        stop4 = 0;
    }

    if (f4 == 1) {
        workspace.fillText("ПИРВЫЙ", 50, 485, 200);
    }
    if (f4 == 2) {
        workspace.fillText("ФТАРОЙ", 50, 485, 200);
    }
    if (f4 == 3) {
        workspace.fillText("ТРИТИЙ", 50, 485, 200);
    }
    if (f4 == 4) {
        workspace.fillText("ОКРАЕННЫЙ", 50, 485, 200);
    }

    setTimeout(draw, 15);
}


/////////////////    ПАБИДИТЕЛИ ПО ЖИЗНИ    /////////////////////

var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var bank = 0;
parseInt(bank);
sum = 0;
parseInt(sum);
var b = null;

function win() {

    var winner = document.getElementById("Winners");
    
    parseInt(bank);

    winner.options.length = 0;

    winner.options[winner.length] = new Option("В баблосвинку было закинуто: " + bank, " ");

    if ((a1!= 0) && (f1 == 1)) {
        sum = parseInt(2 * a1);
        winner.options[winner.length] = new Option(b + " выиграл " + sum, " ");
        bidamount.value = (parseInt(sum));
    }
    if ((a2!= 0) && (f2 == 1)) {
        sum = parseInt(2 * a2);
        winner.options[winner.length] = new Option(b + " выиграл " + sum, " ");
        bidamount.value = (parseInt(sum));
    }
    if ((a3!= 0) && (f3 == 1)) {
        sum = parseInt(2 * a3);
        winner.options[winner.length] = new Option(b + " выиграл " + sum, " ");
        bidamount.value = (parseInt(sum));
    }
    if ((a4 != 0) && (f4 == 1)) {
        sum = parseInt(2 * a4);
        winner.options[winner.length] = new Option(b + " выиграл " + sum, " ");
        bidamount.value = (parseInt(sum));
    }
    if ((sum / 2) != bank) {
        winner.options[winner.length] = new Option(parseInt(bank - sum / 2) + " бабок ушло к тараканим сутенёрам", " ");
        bidamount.value=parseInt(sum-parseInt(bank));
    }

    
}
//////////////////////////////////////////////////////////////////

///////////////////////   СТАВКИ    /////////////////////
function AddBid() {
    var a = null;
    var c = null;
    parseInt(c);


    var radio11 = document.getElementById("radio11");
    var radio12 = document.getElementById("radio12");
    var radio13 = document.getElementById("radio13");
    var radio14 = document.getElementById("radio14");


    if (a == null) a = "Атлетр не выбран";
    if (b == null) b = "Anonim";
    if (c == null) c = "ничего";

    if (radio11.checked) a = radio11.value;
    if (radio12.checked) a = radio12.value;
    if (radio13.checked) a = radio13.value;
    if (radio14.checked) a = radio14.value;

    if (YourName.value != "") {
        b = YourName.value;
        YourName.value = b;
    }

    if (bidamount.value != "") {
        c = bidamount.value;

        bank += parseInt(c);
    }


    if (radio11.checked) a1 = c;
    if (radio12.checked) a2 = c;
    if (radio13.checked) a3 = c;
    if (radio14.checked) a4 = c;

    var spisok = document.getElementById("Spisok");
    spisok.options[spisok.length] = new Option(a + " был выбран " + b + " и поставил " + c, " ");
}
addEventListener("load", draw);
/////////////////////  СКРИПТ ////////////////////////////////

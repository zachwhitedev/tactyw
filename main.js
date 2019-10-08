
let tlogo = document.getElementById('tshirt-logo');
let bankroll = document.getElementById('bankroll');
let storemessage = document.getElementById('store-message');

tlogo.innerHTML = 'plebe';

let clicked = 0;
let bankAmt = 5;
let storeClick = 0;
let boughtSupreme = false;

bankroll.innerHTML = `Bankroll: $${bankAmt}`




function makeSupreme(){
boughtSupreme = true;
if(bankAmt > 29){
bankAmt -= 30;
bankroll.innerHTML = `Bankroll: $${bankAmt}`
storemessage.innerHTML = '';
$("#tshirt-logo").css({"color": "red"});
$("#torso").css({"background": "white"});
tlogo.innerHTML = 'SUPREME';
$('#character').css({'filter': 'blur(0px)'})
$('#get-dollar').css({'display': 'block'})
storeClick++;
$('#store').css({'display': 'none'});



}
else {
    storemessage.innerHTML = 'You dont have enough moola. Get back to clicking. (click \'Store\' again)';
    tlogo.innerHTML = 'plebe';
    $("#tshirt-logo").css({"color": "white"});

}
}


function openStore(){
    storeClick++
    if(storeClick%2!=0){
    if(tlogo.innerHTML == 'SUPREME'){
        $('#supremey').removeAttr('onclick');
        $('#supremey').css({'text-decoration': 'line-through'});

    }
    $('#store').css({'display': 'block'})
    $('#character').css({'filter': 'blur(5px)'})
    $('#get-dollar').css({'display': 'none'})
    storemessage.innerHTML = '';
    if(boughtSupreme){
        storemessage.innerHTML = 'u bought the only fuckin thing in the store so... this is awkward! lol!';
    }




    }
    else{
        $('#store').css({'display': 'none'})
        $('#character').css({'filter': 'blur(0px)'})
        $('#get-dollar').css({'display': 'block'})
    }
}

function getDollar(){
    bankAmt++;
    bankroll.innerHTML = `Bankroll: $${bankAmt}`

}
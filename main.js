let tlogo = document.getElementById('tshirt-logo');
let bankroll = document.getElementById('bankroll');
let storemessage = document.getElementById('store-message');
let donationstatus = document.getElementById('donation-status');
let tossbutton = document.getElementById('get-dollar');
donationstatus.innerHTML = 'Donation Status: Piglet';

let clicked = 0;
let bankAmt = 0;
let storeClick = 0;
let boughtSupreme = false;

bankroll.innerHTML = `${bankAmt}`;

function openStore() {
  storeClick++;
  if (storeClick % 2 != 0) {
    if (tlogo.innerHTML == 'SUPREME') {
      $('#supremey').removeAttr('onclick');
      $('#supremey').css({ 'text-decoration': 'line-through' });
    }
    $('#store').css({ display: 'block' });
    $('#character').css({ filter: 'blur(5px)' });
    $('#get-dollar').css({ display: 'none' });
    storemessage.innerHTML = '';
    if (boughtSupreme) {
      storemessage.innerHTML =
        'u bought the only fuckin thing in the store so... this is awkward! lol!';
    }
  } else {
    $('#store').css({ display: 'none' });
    $('#character').css({ filter: 'blur(0px)' });
    $('#get-dollar').css({ display: 'block' });
  }
}

function getDollar() {
  var audio = document.getElementById('audio');
  audio.play();
  bankAmt++;
  bankroll.innerHTML = `${bankAmt}`;
  if (bankAmt % 10 == 0) {
    var hmm = document.getElementById('hmm');
    hmm.play();
  }
  if (bankAmt == 20) {
    $('#propic').attr('src', './jaskier.png');
    donationstatus.innerHTML = 'Donation Status: Humble Bard';
    var song1 = document.getElementById('song1');
    song1.play();
  }
  if (bankAmt % 50 == 0) {
    $('#propic').attr('src', './jaskier.png');
    donationstatus.innerHTML = 'Donation Status: Humble Bard';
    var song1 = document.getElementById('song1');
    song1.play();
  }
  if (bankAmt % 100 == 0) {
    $('#propic').attr('src', './jaskier.png');
    donationstatus.innerHTML = 'Donation Status: Humble Bard';
    var song1 = document.getElementById('song1');
    song1.play();
  }
  if (bankAmt == 30) {
    $('#propic').hide();
    $('#geralt-gif').hide();
    $('#donation-status').hide();
    $('#bankroll').hide();
    $('#coinpurse').hide();
    $('#get-dollar').hide();
    $('#roach').show();
    $('#loyalty').show();
    $('#startoverbtndiv').show();

    donationstatus.innerHTML = 'Donation Status: Humble Bard';
    var song1 = document.getElementById('song1');
    song1.play();
  }
}

function startover() {
  $('#propic').show();
  $('#geralt-gif').show();
  $('#donation-status').show();
  $('#bankroll').show();
  $('#coinpurse').show();
  $('#get-dollar').show();
  $('#roach').hide();
  $('#loyalty').hide();
  $('#startoverbtndiv').hide();
  bankAmt = 0;
  bankroll.innerHTML = `${bankAmt}`;
  $('#propic').attr('src', './yennefer.png');
    donationstatus.innerHTML = 'Donation Status: Piglet';
}

// Viser valgt kategori
var selectedCat;
$( "#cat1" )
  .change(function() {
    var str = "";
    $( "#cat1 option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#title1" ).text( str + ' is selected') ;
    selectedCat =$( "#cat1 option:selected" ).val();
    console.log(str);
    console.log(selectedCat);
  });


  $( "#cat2" )
    .change(function() {
      var str = "";
      $( "#cat2 option:selected" ).each(function() {
        str += $( this ).text() + " ";
      });
      $( "#title2" ).text( str + ' is selected') ;
      selectedCat = str;
      console.log(str);
      console.log(selectedCat);
    });

  $( "#cat3" )
      .change(function() {
        var str = "";
        $( "#cat3 option:selected" ).each(function() {
          str += $( this ).text() + " ";
        });
        $( "#title3" ).text( str + ' is selected') ;
        selectedCat = str;
        console.log(str);
        console.log(selectedCat);
      });




// Dette er vores randomizer - P.t. kan den vælge tre tilfældige items ud og sætte dem ind i html'en. Vi skal udvide den lidt :-)
$('#randomize').click(function(){

  var food =
  [
  ["<img src='img/logo1.png'/>", "<br/>Ali babas<br/>", "Beskrivelse1"],
  ["<img src='img/logo1.png'/>", "<br/>Kowloon<br/>", "Beskrivelse2"],
  ["<img src='img/logo1.png'/>", "<br/>Pita corner<br/>", "Beskrivelse3"],
  ["<img src='img/logo1.png'/>", "<br/>A+ Siam Sushi<br/>", "Beskrivelse4"]
  ];
  var bars =
    [
  ["<img src='img/logo1.png'/>", "<br/>Fatter Eskil<br/>", "Beskrivelse1"],
  ["<img src='img/logo1.png'/>", "<br/>G-Bar<br/>", "Beskrivelse2"],
  ["<img src='img/logo1.png'/>", "<br/>Old Irish<br/>", "Beskrivelse3"],
  ["<img src='img/logo1.png'/>", "<br/>Bodegaen<br/>", "Beskrivelse4"]
  ];
  var cult =
    [
  ["<img src='img/logo1.png'/>", "<br/>Steno Museet<br/>", "Beskrivelse1"],
  ["<img src='img/logo1.png'/>", "<br/>Kunsthal Aarhus<br/>", "Beskrivelse2"],
  ["<img src='img/logo1.png'/>", "<br/>Kvindemuseet<br/>", "Beskrivelse3"],
  ["<img src='img/logo1.png'/>", "<br/>Marseillesborg slot<br/>", "Beskrivelse4"]
  ];
  var acvtivity =
    [
  ["<img src='img/logo1.png'/>", "<br/>Ø-Haven<br/>", "Beskrivelse1"],
  ["<img src='img/logo1.png'/>", "<br/>Eventhall<br/>", "Beskrivelse2"],
  ["<img src='img/logo1.png'/>", "<br/>Dyrehaven<br/>", "Beskrivelse3"],
  ["<img src='img/logo1.png'/>", "<br/>Århus Boulders<br/>", "Beskrivelse4"]
  ];








// Hvis bar kategori er valgt
if (selectedCat == 'bar-cat'){

  var randName = [];
  do {
    randName[randName.length] = bars.splice(
                                  Math.floor(Math.random() * bars.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis food kategori er valgt
if (selectedCat == 'food-cat'){

  var randName = [];
  do {
    randName[randName.length] = food.splice(
                                  Math.floor(Math.random() * food.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}

// Hvis culture kategori er valgt
if (selectedCat == 'cult-cat'){

  var randName = [];
  do {
    randName[randName.length] = cult.splice(
                                  Math.floor(Math.random() * cult.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}
// Hvis activity kategori er valgt
if (selectedCat == 'act-cat'){

  var randName = [];
  do {
    randName[randName.length] = activity.splice(
                                  Math.floor(Math.random() * activity.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#one').html(randName[0]);
$('select').hide();
$('.selected').hide();
  console.log(randName);
}
});


//newsslider - gentagelse, hastighed og hurtig start

$('.marquee').marquee({
  duplicated: true,
  duration: 8000,
  delayBeforeStart: 0,
});

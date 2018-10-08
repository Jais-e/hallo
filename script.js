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
      selectedCat = $("#cat1 option:selected" ).val();
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
        selectedCat = $("#cat1 option:selected" ).val();
        console.log(str);
        console.log(selectedCat);
      });




// Dette er vores randomizer - P.t. kan den vælge tre tilfældige items ud og sætte dem ind i html'en. Vi skal udvide den lidt :-)
$('#randomize').click(function(){

  var food =
  [
  ["<img src='img/alibaba.jpg'/>", "<br/>Ali Baba<br/>", "Stop any person from Aarhus and ask about Ali Baba and they'll let you know how they serve the greatest drunk food in the city. Whether you want a slice of pizza or a kebab or a pita this is the place to go. <br> Vestergade 6B, 8000 Aarhus C"],
  ["<img src='img/kowloon.jpg'/>", "<br/>Kowloon<br/>", "Beskrivelse2"],
  ["<img src='img/pitacorner.jpg'/>", "<br/>Pita corner<br/>", "If you go to the corner of Vesterbro Torv where Pita Corner is located on a friday night you will find a line of people going from the small shop to the street but don't let that intimidate you. Pita Corner serves the greatest Pita in Aarhus and you don't want to miss out. <br> Vesterbro Torv 17, 8000 Aarhus C"],
  ["<img src='img/siamsushi.jpg'/>", "<br/>A+ Siam Sushi<br/>", "Beskrivelse4"]
  ];
  var bars =
    [
  ["<img src='img/fattereskil.jpg'/>", "<br/>Fatter Eskil<br/>", "Beskrivelse1"],
  ["<img src='img/gbar.jpg'/>", "<br/>G-Bar<br/>", "Beskrivelse2"],
  ["<img src='img/oldirish.jpg'/>", "<br/>Old Irish<br/>", "Beskrivelse3"],
  ["<img src='img/bodegaen.jpg'/>", "<br/>Bodegaen<br/>", "If you want to feel like a true local go to Bodegaen and order a "Aarhus sæt" (a local Ceres beer and a shot)."]
  ];
  var cult =
    [
  ["<img src='img/steno.jpg'/>", "<br/>Steno Museet<br/>", "Beskrivelse1"],
  ["<img src='img/kunsthal.jpg'/>", "<br/>Kunsthal Aarhus<br/>", "Beskrivelse2"],
  ["<img src='img/kvindemuseet.jpg'/>", "<br/>Kvindemuseet<br/>", "Beskrivelse3"],
  ["<img src='img/marselisborg.jpg'/>", "<br/>Marseillesborg slot<br/>", "Beskrivelse4"]
  ];
  var activity =
    [
  ["<img src='img/ohaven.jpg'/>", "<br/>Ø-Haven<br/>", "Ø-haven is Denmark's biggest city garden with one of the most beautiful views. It is open to the public but the produce of the garden is reserved for the city farmers so enjoy the garden with your eyes and nose only. <br> Helga Pedersens gade, 8000 Aarhus C"],
  ["<img src='img/eventhall.jpg'/>", "<br/>Eventhall<br/>", "Eventhall is the greatest playground for adults in Aarhus. Try inflatable activities such as bungeebasket, gladiator fights and mega foosball or go outside to try a game of paintball.<br> Øster Parkvej 2, 8270 Højbjerg"],
  ["<img src='img/dyrehaven.jpg'/>", "<br/>Dyrehaven<br/>", "In Dyrehaven you can meet deers up close and feed them carrots or apples. You can also see wild boar through a fence and talk a walk along the beach nearby. Keep in mind the animals are wild, not pets. <br> Ørneredevej 6, 8270 Højbjerg"],
  ["<img src='img/boulders.jpg'/>", "<br/>Aarhus Boulders<br/>", "In bouldering you climb up to 4.5 meters high walls with no harness or other equipment. Aarhus Boulders is for everyone - whether you've climbed a hundred times or never before. <br> Graham Bells vej 18A, 8200 Aarhus N"]
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

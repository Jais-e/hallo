// Dette er vores randomizer - P.t. kan den vælge tre tilfældige items ud og sætte dem ind i html'en. Vi skal udvide den lidt :-)


$('#randomize').click(function() {

  // Vi skal lave 4 var's - Een for hver kategori - "names" var er bare et eksempel jeg brugte da jeg skulle have den til at virke.
  // Denne type "array" kan indeholde flere værdier pr item - VI skal lave 3: Et billede, et stednavn og en beskrivelse

  if ( $('#cat1').val() == 1) {


  var bars = [
    ["Kai", " Andersen"],
    ["Anders", " Lassen"],
    ["Petter", " Brandt"],
    ["Anne", " Madsen"]
  ];

  var randName1 = [];




    do {
      randName1[randName1.length] = bars.splice(
        Math.floor(Math.random() * bars.length), 1)[0];
    } while (randName1.length < 3);

    //Indsætter de 3 items i 3 forskellige div's
    $('#dest1').html(randName1[0]);
    $('#dest2').html(randName1[1]);
    $('#dest3').html(randName1[2]);
    console.log(randName);

    }
});

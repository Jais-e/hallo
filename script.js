// Dette er vores randomizer - P.t. kan den vælge tre tilfældige items ud og sætte dem ind i html'en. Vi skal udvide den lidt :-)


$('button').click(function(){

// Vi skal lave 4 var's - Een for hver kategori - "names" var er bare et eksempel jeg brugte da jeg skulle have den til at virke.
  var names = [
    ["Kai", " Andersen"],
    ["Anders", " Lassen"],
    [ "Petter", " Brandt"],
    ["Anne", " Madsen"]
    ];
  var randName = [];
  do {
    randName[randName.length] = names.splice(
                                  Math.floor(Math.random() * names.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#1').html(randName[0]);
$('#2').html(randName[1]);
$('#3').html(randName[2]);
  console.log(randName);


});

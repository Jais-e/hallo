// Skifter overskrift til valgt kategori

$( "#cat1" )
  .change(function() {
    var str = "";
    $( "#cat1 option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#title1" ).text( str + ' is selected') ;
  });


  $( "#cat2" )
    .change(function() {
      var str = "";
      $( "#cat2 option:selected" ).each(function() {
        str += $( this ).text() + " ";
      });
      $( "#title2" ).text( str + ' is selected') ;
    });

    $( "#cat3" )
      .change(function() {
        var str = "";
        $( "#cat3 option:selected" ).each(function() {
          str += $( this ).text() + " ";
        });
        $( "#title3" ).text( str + ' is selected') ;
      });

// Dette er vores randomizer - P.t. kan den vælge tre tilfældige items ud og sætte dem ind i html'en. Vi skal udvide den lidt :-)
$('button').click(function(){


  var names = [
    ["Billede1", " Titel1", " Beskrivelse1"],
    ["Billede2", " Titel2", " Beskrivelse2"],
    ["Billede3", " Titel3", " Beskrivelse3"],
    ["Billede4", " Titel4", " Beskrivelse4"]
    ];
  var randName = [];
  do {
    randName[randName.length] = names.splice(
                                  Math.floor(Math.random() * names.length)
                                , 1)[0];
  } while (randName.length < 3);
$('#1').html(randName[0]);
$('#1').html(randName[1]);
$('#1').html(randName[2]);
  console.log(randName);


});


//newsslider - gentagelse, hastighed og hurtig start

$('.marquee').marquee({
  duplicated: true,
  duration: 8000,
  delayBeforeStart: 0,
});

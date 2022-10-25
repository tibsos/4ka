function pop(){
    $('#pop').css({'transform':'scale(1.05)'});
    setTimeout(popDown,300)
}
function popDown(){
    $('#pop').css({'transform':'scale(1)'});
    setTimeout(pop,2000);
}
pop();


/* Wobble */

function wobble() {
    $('#wobble').animate({'marginTop': '+=2.5'}, 150)
    .animate({'marginTop':'-=5'},150)
    .animate({'marginTop':'+=5'},150)
    .animate({'marginTop':'-=5'},150)
    .animate({'marginTop':'+=5'},150)
    .animate({'marginTop':'-=3.5'},150)
    .animate({'marginTop':'+=3.5'},150)
    .animate({'marginTop':'-=2.5'},150)
         .animate({'marginTop': '+=2.5'}, 175, function() {
             setTimeout(wobble, 1500);
         });
}
wobble();

/* Buzz */

function buzz(degrees,dur){
    $('#buzz').animate(
        { deg: degrees },
        {
        duration: dur,
        step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
        
        }
    );
}
rotation=1;
duration=100;
function buzzLoop(){
    buzz(rotation,duration);
    buzz(-rotation,duration);
    buzz(rotation,duration);
    buzz(-rotation,duration);
    buzz(0,duration);
    setTimeout(buzzLoop,2000)
}
buzzLoop();

/* Color change */
colors=['red','blue','green','yellow']     
function gradient(){
    colors.forEach(function(color){
        $('#color').animate({
        backgroundColor:color,
        }).delay(500);
    });
    gradient();     
}
gradient();
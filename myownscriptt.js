$(document).ready(function(){
var clickedd;
$('#darken').hide();
$('.photoos').click(function(){
$('body').css({overflow: 'hidden'}).animate({ scrollTop: 0 }, 200);
$(this).css({position: 'absolute', border: 'none' }).css('z-index', 7).animate({
top: '10%',
right: '10%',
left: '10%',
bottom: '10%',
width: '80%',
height: '80%'
});
$('#darken').show();
$('#close').show();
clickedd = this;
if ($(this)[0] == $('#portraitview')[0]){
$(this).animate({
width: '50%',
left: '25%',
right: '25%'
});
}else if ($(this)[0] == $('#portraitview2')[0]){
$(this).animate({
width: '50%',
left: '25%',
right: '25%'
});
}
});

$('#close').click(function(){
$('body').css({overflow: 'visible'});
$(clickedd).css({position: 'relative', border: '1px solid lightgray' }).css('z-index', 1).animate({
top: '0',
right: '0',
left: '0',
bottom: '0',
width: '200px',
height: '120px'
});
$('#darken').hide();
$('#close').hide();
});


});
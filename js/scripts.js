// plik scripts.js
$(document).ready(function(){
	console.log('DOM załadowany - można się bawić');
});

$("span:odd").css('color','red');
var paragraphs = $('p');
paragraphs.each(function(index, element) {

var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
$(element).append(button) 

});
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
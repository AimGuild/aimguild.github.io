$(document)
.ready(function() {

  // fix main menu to page on passing
  $('.main.menu').visibility({
	type: 'fixed'
  });
  $('.overlay').visibility({
	type: 'fixed',
	offset: 80
  });

  // lazy load images
  $('.image').visibility({
	type: 'image',
	transition: 'vertical flip in',
	duration: 500
  });

  // show dropdown on hover
  $('.main.menu  .ui.dropdown').dropdown({
	on: 'hover'
  });

  var urlVars = getUrlVars();

  var decodedString = atob(urlVars.d);
  var json = JSON.parse(decodedString);
  console.log(json[0]);
});




function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('nav ul').removeAttr('style');
	 }
	});
});

var newLink = document.createElement( "a" );

var allParagraphs = document.getElementsByTagName('p');

var firstParagraph = allParagraphs[0];

function revealCopy(e) {
    var allParagraphs = document.getElementsByTagName("p");
    for( var i = 0; i < allParagraphs.length; i++ ) {
        if( i === 0 ) {
            continue;
    }
    allParagraphs[ i ].style.display = "block";
  }
  this.remove();
  e.preventDefault();
}

newLink.setAttribute("href","#");

newLink.innerHTML="Read More";

newLink.setAttribute( "class", "more-link" );

firstParagraph.appendChild( newLink );

newLink.addEventListener( "click", revealCopy );

for( var i = 0; i < allParagraphs.length; i++ ) {
        if( i === 0 ) {
        continue;
      }
    allParagraphs[ i ].style.display = "none";
}

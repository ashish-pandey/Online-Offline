$(document).ready(function(){
	$('input,a').hover(function(el, mouseLeft, mouseTop){
		mouseTop = 200;
		mouseLeft = 200;
		//console.log(this.value);
		var leftRnd = (Math.random()-0.5)*20;
	    var topRnd = (Math.random()-0.5)*20;
	    var btnLeft = mouseLeft+(leftRnd>0?100:-100)+leftRnd;
	    var btnTop = mouseTop+(topRnd>0?30:-30)+topRnd;
	    btnLeft = btnLeft<100?(btnLeft+window.innerWidth-200):(btnLeft>window.innerWidth-100?btnLeft-window.innerWidth+200:btnLeft);
	    btnTop =  btnTop<100?( btnTop+window.innerHeight-200):(btnTop>window.innerHeight-100?btnTop-window.innerHeight+200:btnTop);
	    $(this).css({'position' :'fixed',
	    	'left' : btnLeft + 'px',
	    	'top' : btnTop + 'px'
		});
	});

});

console.log("I m here");
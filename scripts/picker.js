$(function() {
	// target palette
	let $target;
	
  // palette click -> select palette
  $('h1, .container-palette').on('click', function(e) {
  	const $_target = $(e.target);
 		if ($_target.is('.palette, span')) {
    	$target = $_target;
      updateColor($target);
    }
  });
  
  // palette doubleclick -> reset palette
  $('h1, .container-palette').on('dblclick', function(e) {
  	const $_target = $(e.target);
    if ($_target.is('.palette')) {
    	$_target.css('background-color', '#ffffff');
      $_target.children('p').text('#ffffff').css('color', '#000000');
      $target = null;
    } else if ($_target.is('span')) {
    	$_target.css('color', '#000000');
      $target = null;
    }
  });
	
  // slider
  $('.slider').on('input', function(e) {
  	const $_target = $(e.target);
    $_target.prev().text($_target.val());
    
    if ($target) {
    	const r = $('#slider-r');
      const g = $('#slider-g');
      const b = $('#slider-b');
    	updateColor($target);
    }
  });
  
  function updateColor(target) {
  	const r = Number($('#slider-r').val());
    const g = Number($('#slider-g').val());
    const b = Number($('#slider-b').val());
    
    const textR = r.toString(16).length == 1 ? "0" + r.toString(16) : r.toString(16);
    const textG = g.toString(16).length == 1 ? "0" + g.toString(16) : g.toString(16);
    const textB = b.toString(16).length == 1 ? "0" + b.toString(16) : b.toString(16);
    
    if (target.is('.palette')) {
    	target.css('background-color', `rgb(${r}, ${g}, ${b})`);
	    target.children('p').text(`#${textR}${textG}${textB}`).css('color', `rgb(${255-r}, ${255-g}, ${255-b})`);
    } else {
    	target.css('color', `rgb(${r}, ${g}, ${b})`);
    }
  }
});

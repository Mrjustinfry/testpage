/**
 * In order to debug we need this function
 */
function debugError(error) {
  console.error(error);
}
function sayHello() {
	$('.btn').on('click', function() {
	alert('hello');
	})
}

$(sayHello);

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(bandName) {
	
	 return bandName.replace(/^(a |the |an )/i, '').trim();
}

const bandNamesInOrder = bands.sort(function(firstEl, secondEl) {
	
	
	if (stripArticle(firstEl) > stripArticle(secondEl)) {
		return 1;
	} else {
		return -1;
	}
});
document.querySelector('#bands').innerHTML = 
	bandNamesInOrder
	.map(bandName => `<li>${bandName}</li>`)
	.join('');
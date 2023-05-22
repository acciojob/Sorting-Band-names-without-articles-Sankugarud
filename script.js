const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(bandName) {
	 // trim cuts of white space at the begining and end of a string.
	 // We are using the regex to check if one of the articles is included in the band names
	 return bandName.replace(/^(a |the |an )/i, '').trim();
}

const bandNamesInOrder = bands.sort(function(firstEl, secondEl) {
	//const nameFirstEl = firstEl.toUpperCase();
	//const nameSecondEl = secondEl.toUpperCase();
	// Uppercase ensures the comparision between the pair of strings get easier since they are both the same
	
	if (stripArticle(firstEl) > stripArticle(secondEl)) {
		return 1;
	} else {
		return -1;
	}
});
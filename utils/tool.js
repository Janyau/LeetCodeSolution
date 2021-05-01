function randArray(len, min, max) {
	return Array.from({length:len}, v=> Math.floor(Math.random()*(max - min)) + min)
}

module.exports = {
	randArray
}
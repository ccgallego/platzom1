'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
// creando un nuevo lenguaje

function platzom(str) {
	var traslation = str;

	// si la palabra termina en ar se le borra 
	if (str.toLowerCase().endsWith('ar')) {
		traslation = str.slice(0, -2);
	}

	// si la palabra empieza en Z se le pone los caracteres 'pe'
	if (str.toLowerCase().startsWith('z')) {
		traslation += 'pe';
	}

	// si la palabra tiene 10 o mas caracteres, dividir en la mitad por un -

	var length = traslation.length;
	if (length >= 10) {
		var firtsmitad = traslation.slice(0, Math.round(length / 2));
		var secondmitad = traslation.slice(Math.round(length / 2));
		traslation = firtsmitad + '-' + secondmitad;
	}

	//si la palabra es palindrome no aplican las otras reglas
	// y se intercalan mayusculas y min


	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var traslation = '';
		var ponerMay = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traslation += ponerMay ? char.toUpperCase() : char.toLowerCase();
			ponerMay = !ponerMay;
		}
		return traslation;
	}
	if (str == reverse(str)) {

		return minMay(str);
	}

	return traslation;
}
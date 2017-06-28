// creando un nuevo lenguaje

export default function platzom(str){
let traslation = str

// si la palabra termina en ar se le borra 
if(str.toLowerCase().endsWith('ar')){
   traslation= str.slice(0,-2)
}

// si la palabra empieza en Z se le pone los caracteres 'pe'
if(str.toLowerCase().startsWith('z')){
	traslation+= 'pe'
}

// si la palabra tiene 10 o mas caracteres, dividir en la mitad por un -

let length = traslation.length
if(length >= 10){
	const firtsmitad = traslation.slice(0,Math.round(length/2))
	const secondmitad = traslation.slice(Math.round(length/2))
	traslation = `${firtsmitad}-${secondmitad}`
}

//si la palabra es palindrome no aplican las otras reglas
// y se intercalan mayusculas y min


const reverse = (str) => str.split('').reverse().join('')

function minMay(str){
	const length = str.length
	let traslation = ''
	let ponerMay = true
	for(let i=0; i < length ; i++){
		const char = str.charAt(i)
		traslation+= ponerMay ? char.toUpperCase() : char.toLowerCase()
		ponerMay = !ponerMay
	}
	return traslation
}
if(str == reverse(str)){

	return minMay(str)
}

return traslation

}


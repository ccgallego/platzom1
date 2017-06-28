const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

	it('Si la palabra termina en "ar" se le quitan esas dos letras', function(){
	    const traslation = platzom("Programar")
		expect(traslation).to.equal("Program")
	})  

	it('Si la palabra empieza en Z se le pone los caracteres "pe"', function(){
		const traslation = platzom("Zorro")
		const traslation2 = platzom("Zarpar")

		expect(traslation).to.equal("Zorrope")
		expect(traslation2).to.equal("Zarppe")
	})

	it('Si la palabra traducida tiene 10 o mas letras, dividir en la mitad y separarlas por un guion ', function(){
		const traslation = platzom("Programadores")
		expect(traslation).to.equal("Program-adores")
	})

	it('Si la palabra original es palindrome no aplican las otras reglas y se intercalan letras mayusculas y minusculas', function(){
		const traslation = platzom("reconocer")
		expect(traslation).to.equal("ReCoNoCeR")
    })
})
# Platzom

Platzon es un idioma inventado para el
 [Curso de Fundamentos de JavaScript] (https://platzi.com/js)
 de [Platzi] (https://platzi.com), el mejor lugar de educacion online

 ## Descripcion del idioma

 - Si la palabra termina en 'ar' se le quitan esas dos letras

 - Si la palabra empieza en Z se le pone los caracteres 'pe'

 - Si la palabra traducida tiene 10 o mas letras,
   dividir en la mitad y separarlas por un guion 

 - Si la palabra original es palindrome no aplican las otras
   reglas y se intercalan letras mayusculas y minusculas

 ## Instalacion

 ```
 npm install platzom
 
 ```

 ## Uso

 ```
 import platzom from 'platzom'

 platzom("Programar") // Program
 platzom("Zorro") // Zorrope
 platzom("Zarpar") // Zarppe
 platzom("abecedario") // abece-dario
 platzom("sometemos") // SoMeTeMoS

 ```

 ## Creditos

 -[Cristian Gallego] (https://www.facebook.com/cristian.gallego.161)

 ## Licencia

 -[MIT] (https://opensource.org/licenses/MIT)


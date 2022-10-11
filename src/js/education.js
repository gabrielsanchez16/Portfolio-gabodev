const typed = new Typed('.typed', {
    strings : [
        '"No se trata de donde vienes, sino de donde vas". <b>Ella Fitzgerald.</b>', 
        '“Lo que con mucho trabajo se adquiere, más se ama”. <b>Aristóteles.</b>',
        '"Las oportunidades no ocurren, las creas tú". <b>Chris Grosser.</b>',
        '"La mejor forma de predecir el futuro es crearlo". <b>Abraham Lincoln.</b>',
        '"El aprendizaje no es un deporte para espectadores". <b>D. Blocher.</b>',
        '"No hay ascensor al éxito, tienes que tomar las escaleras"',
        '"Haz una cosa al día que te dé miedo". <b>Eleanor Roosevelt.</b>',
        
    ],
    // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 25, // Velocidad en milisegundos para borrrar una letra,
	// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: true, // Alterar el orden en el que escribe las palabras.
	backDelay: 1800, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
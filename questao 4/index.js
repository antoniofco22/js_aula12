arraycartas = [];
c = 0;
carta = [];

function naipe(titulo) {
	array_valor = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
	for (n = 0; n <= 12; n++) {
		arraycartas[c] = { 'real': n + 1, 'valor': array_valor[n], 'naipe': titulo, 'img': 'img/' + titulo + '/' + array_valor[n] + titulo[0] + '.svg' };
		c++;
	}
}

function cartas() {
	naipe('Paus');
	naipe('Espadas');
	naipe('Ouros');
	naipe('Copas');
}
function carregar() {
	//chama as cartas 
	cartas();
	card.style.width = '96vw';
	card.style.left = '1vw';
	img = '';
	arraycartas.forEach(function (item) { img += '<img src="' + item['img'] + '" width="' + elem.clientWidth / 14 + '">'; });
	elem.innerHTML = img;
}

function regras() {
	//Sequencia 
	//ordenar as cartas 
	carta.sort(function (a, b) { return a['real'] - b['real'] });
	sequencia = true;
	for (i = 0; i < carta.length - 1; i++) {
		if (!(carta[i]['real'] == (carta[i + 1]['real'] - 1))) {
			sequencia = false;
		}
	}

	//naipe iguais para a straight flush
	naipe = carta[0]['naipe'];
	straight = true;
	carta.forEach(function (item, index) {
		if (!(item['naipe'] == naipe)) { straight = false; }
	});


	//quadra
	royalstraight = true;
	quadra = true;
	trinca = true;
	fullhouse = true;
	par = true;
	doublepar = true;
	n = [];
	for (i = 0; i < carta.length; i++) {
		n[i] = carta[i]['real'];

	}
	if (!(n[0] == 1 && n[1] == 10 && n[2] == 11 && n[3] == 12 && n[4] == 13)) {
		royalstraight = false;
	}
	if (!(n[0] == n[1] && n[0] == n[2] && n[0] == n[3] || n[1] == n[2] && n[1] == n[3] && n[1] == n[4])) {
		quadra = false;
	}
	if (!(n[0] == n[1] && n[0] == n[2] || n[1] == n[2] && n[1] == n[3] || n[3] == n[2] && n[3] == n[4])) {
		trinca = false;
	}
	if (!(n[0] == n[1] && n[0] == n[2] && n[3] == n[4] || n[2] == n[3] && n[2] == n[4] && n[0] == n[1])) {
		fullhouse = false;
	}
	if (!(n[0] == n[1] || n[1] == n[2] || n[2] == n[3] || n[3] == n[4])) {
		par = false;
	}
	if (!(n[0] == n[1] && n[2] == n[3] || n[0] == n[1] && n[3] == n[4] || n[1] == n[2] && n[3] == n[4])) {
		doublepar = false;
	}

	//Concluindo
	texto = elem.innerHTML;
	if (straight == true && royalstraight == true) {
		return elem.innerHTML = texto + 'ROYAL STRAIGHT FLUSH:YES.';
	} else if (sequencia == true && straight == true) {
		return elem.innerHTML = texto + 'STRAIGHT:YES.';
	} else if (sequencia == true && straight == false) {
		return elem.innerHTML = texto + 'SEQUENCIA:YES.';
	} else if (quadra == true && fullhouse == false) {
		return elem.innerHTML = texto + 'QUADRA:YES.';
	} else if (trinca == true && fullhouse == false) {
		return elem.innerHTML = texto + 'TRINCA:YES.';
	} else if (fullhouse == true) {
		return elem.innerHTML = texto + 'FULL HOUSE:YES.';
	} else if (par == true && doublepar == false) {
		return elem.innerHTML = texto + 'PAR:YES.';
	} else if (doublepar == true) {
		return elem.innerHTML = texto + 'DUPLO PAR:YES.';
	} else {
		return elem.innerHTML = texto + 'NADA:YES.';
	}
}


function embaralhar() {

	arraycartas.forEach(function (item, index) {
		num = Math.floor(Math.random() * arraycartas.length);
		x = arraycartas[num];
		y = arraycartas[index];
		arraycartas[num] = y;
		arraycartas[index] = x;
	});

	img = '';
	for (n = 0; n < 5; n++) {
		num = Math.floor(Math.random() * arraycartas.length);
		carta[n] = arraycartas[num];
		img += '<img src="' + carta[n]['img'] + '" width="' + elem.clientWidth / 14 + '">';
	}
	elem.innerHTML = img;
	regras();
}



function back() {
	al = document.querySelector('#all');
	array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
		'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
		'https://images7.alphacoders.com/423/423348.jpg'];
	x = parseInt(Math.random() * 3)
	al.style.background = "url('" + array[x] + "')";
}



window.onload = function () {
	back();
	elem = document.querySelector('.elem');
	card = document.querySelector('.card');
	carregar();
};

function vilmar() {
	roger = setInterval(function () {
		embaralhar();
		text = elem.innerHTML; cross = text.split('>')[5].split(':')[0]; 
		if (cross == 'QUADRA' ||cross == 'ROYAL STRAIGHT FLUSH' || cross == 'STRAIGHT') {
			clearInterval(roger); 
		} }, 1);
}
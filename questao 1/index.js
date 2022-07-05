function calcular(num){
	if(num==0){
		return 1;
	}
	
	fator=1;
	for(i=num;i>1;i--){
		fator*=i;
	}
	return fator;
}

function calculando(){
	fatorial = document.querySelector('#num').value;
	arrayfator=fatorial.split('!');
	p=document.querySelector('p');
	if(arrayfator.length == 1){
		return p.innerHTML = 'Digite um fatorial como n!, não se esqueça da "!(exclamção)".Ex:1!2!5!...';
	}
	if(arrayfator[0]==''){
		return p.innerHTML = 'Digite um número no fatorial como n! que seja maior que 0.Ex:1!2!5!...';
	}
	return p.innerHTML = calcular(arrayfator[0]);
}

function expoente(){
	expo = document.querySelector('#expoente').value;
	p=document.querySelector('#p');
	euler=0;
	for(n=0;n<=expo;n++){
		euler+=1/(calcular(n));
	}
	return p.innerHTML=euler;
}
function back(){
	al = document.querySelector('#all');
	array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
	'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
	'https://images7.alphacoders.com/423/423348.jpg'];
	x = parseInt(Math.random()*3)
	al.style.background = "url('"+array[x]+"')";
}



window.onload = function(){
	back();
};
function primo(numero){
	for(n=2;n<numero;n++){
		if(numero%n==0){
			
			return false;
		}
	}
	return true;
}

function comecar(){
	p=document.querySelector('p');
	lista='';
	for (i=2;i<=100000;i++){
		if(primo(i)){
			
			lista+=i+',';
		}
	}
	p.innerHTML = lista;
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
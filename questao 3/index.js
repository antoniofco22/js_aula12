function comecar(){
	p=document.querySelector('p');
	pi=3;
	calculo = 0;
	for (i=1;i<=100;i++){
		if(!(i%2==0)){
			calculo += 4/((i*2)*(i*2+1)*(i*2+2));
		}else{
			calculo-=4/((i*2)*(i*2+1)*(i*2+2));
		}
		console.log(calculo);
	}
	
	p.innerHTML=(pi+calculo);
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

let cont = 1;
let cartas = 2;

function comparador() { 
	return Math.random() - 0.5; 
}

while(cont==1){
	cartas = prompt('quantas cartas vc quer utilizar?');
	if(cartas>5){
		if(cartas<15){
			if(cartas%2==0){
				cont = 0;
			}
		}		
	} 
}
//criaçção das cartas

const imagemcarta = [
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//fiestaparrot.gif',
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//metalparrot.gif',
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//revertitparrot.gif',
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//tripletsparrot.gif',
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//unicornparrot.gif',
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//bobrossparrot.gif',
	'./Arquivos Úteis - Projeto 04 - Parrot Card Game//explodyparrot.gif'
];

const baralho = document.querySelector('ul');
const dec = [];
let i =0;

while(cont<(cartas/2)){

	while(i<=1){
		dec.push(
		`<li onclick="seleccard(this)">
			<div class="card">
	  			<div class="front-face face">
					<image src="./Arquivos Úteis - Projeto 04 - Parrot Card Game//back.png">
	  			</div>
	  			<div class="back-face face">
	  				<image src="${imagemcarta[cont]}">
	  			</div>
			</div>
  		</li>`);
		i++;
	}
	i=0;
	cont++
}

cont=0; 

while(cont<cartas){
	baralho.innerHTML = baralho.innerHTML + dec[cont];
	cont++
}

//começando a jogar

let jogadas = 0;
let primeira_escolha = '';
let segunda_escolha = '';
let end = 0;

card.forEach((carta) => {
	carta.addEventListener("click", () => {
	  if (!carta.classList.contains("virada") && cont < 1) {
		carta.classList.add("virada");
		cont++;
		primeira_escolha = carta;
		jogadas++;
	  } else if (!carta.classList.contains("virada") && cont < 2) {
		carta.classList.add("virada");
		cont++;
		segunda_escolha = carta;
		setTimeout(checarPares,1000,primeira_escolha,segunda_escolha);
		jogadas++;
	  }
	});
})

function checarPares(a, b) {
	if (a.querySelector('.back-face>img').src === b.querySelector('.back-face>img').src) {
	  cont = 0;
	  a = '';
	  b = '';
	  contarPares++;
	} else if (a.querySelector('.back-face>img').src !== b.querySelector('.back-face>img').src) {
	  cont = 0;
	  a.classList.remove('virada');
	  b.classList.remove('virada');
	  a = '';
	  b = '';
	}
	if(end===cartas/2){
	  alert (`Você ganhou em ${jogadas} jogadas!`);
	}
  }

/*
while(end<cartas){
	//seleciona 1 carta
	//seleciona 2 carta
//	if(){ // se a carta1 == carta2
//		//add a finalizado as cartas
//		end +=2;
//	}
	
}
*/
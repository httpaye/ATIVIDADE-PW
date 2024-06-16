const body = document.querySelector('body');
body.style.display = `flex`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;

 const div1 = document.createElement('div');
 div1.style.width = `800px`;
div1.style.height = `450px`;
div1.style.marginTop = '20vh';
div1.style.justifyContent = `center`;
div1.style.backgroundColor = `pink`;
body.appendChild(div1);

const titulo = document.createElement ('h1');
div1.appendChild(titulo)
titulo.textContent = 'Atividade de programação web';
titulo.style.marginLeft = '30vh';

//inputs-H1
const div2 = document.createElement ('div');
div1.appendChild(div2);
div2.style.width = `600px`;
div2.style.height = `300px`;
div2.style.backgroundColor = `pink`;
div2.style.marginLeft = '14vh';

//inputs
const inputName = document.createElement ('input');
div2.appendChild(inputName);
inputName.style.width = '200px';
inputName.style.height = '20px';
inputName.placeholder = "Digite seu nome :"
inputName.style.marginTop = '5vh';
inputName.style.marginLeft = '4vh';
inputName.style.marginLeft = '28vh';


const inputN1 = document.createElement ('input');
div2.appendChild(inputN1);
inputN1.style.width = '200px';
inputN1.style.height = '20px';
inputN1.placeholder = "Digite a primeira nota : "
inputN1.style.marginTop = '4vh';
inputN1.style.marginLeft = '28vh';
inputN1.style.display = 'block'

const inputN2 = document.createElement ('input');
div2.appendChild(inputN2);
inputN2.style.width = '200px';
inputN2.style.height = '20px';
inputN2.placeholder = "Digite a segunda nota :"
inputN2.style.marginTop = '4vh';
inputN2.style.marginLeft = '4vh';
inputN2.style.marginLeft = '28vh';
inputN2.style.display = 'block'

const inputN3 = document.createElement ('input');
div2.appendChild(inputN3);
inputN3.style.width = '200px';
inputN3.style.height = '20px';
inputN3.placeholder = "Digite a terceira nota :"
inputN3.style.marginTop = '4vh';
inputN3.style.marginLeft = '4vh';
inputN3.style.marginLeft = '28vh';
inputN3.style.display = 'block'

//button

const btn = document.createElement('button');
div2.appendChild(btn);
btn.style.width = '200px';
btn.style.height = '50px';
btn.style.marginTop = '4vh';
btn.style.marginLeft = '4vh';
btn.style.marginLeft = '28vh';
btn.textContent = 'Calcular média'

const resultado = document.createElement('p');
resultado.style.width = '60%';
resultado.style.height = '20px'
resultado.style.display = 'block'; 
resultado.style.padding = '5px';
resultado.style.margin = 'auto';
resultado.style.textAlign = 'center';

div1.appendChild(resultado);

//funções:


btn.addEventListener('click', () => {
    const n1 = parseFloat(inputN1.value);
    const n2 = parseFloat(inputN2.value);
    const n3 = parseFloat(inputN3.value);
    const media = (n1 + n2 + n3) / 3;
    

    if (media>= 6){
        resultado.textContent = `Bem-vindo (a), ${inputName.value}, sua média é, ${media}. Você foi aprovado!`;

    }
    else{
        resultado.textContent = `Bem-vindo (a), ${inputName.value}, sua média é, ${media}. Você foi REPROVADO!`;
    }
})

const nav = document.createElement ('nav');
nav.style.width = '100%';
nav.style.height = '50px';
nav.style.backgroundColor = 'black';
nav.style.marginLeft = 'vh';
nav.style.marginTop = '-80vh';
nav.style.position = 'absolute';
nav.style.display = `flex`;
nav.style.justifyContent = `center`;
nav.style.alignItems = `center`;
body.appendChild(nav);

const navText1 = document.createElement ('p');
navText1.style.color = 'white';
navText1.textContent = 'TWICE '
nav.appendChild(navText1);

const footer = document.createElement ('footer');
footer.style.width = '100%';
footer.style.height = '50px';
footer.style.backgroundColor = 'black';
footer.style.marginLeft = 'vh';
footer.style.marginTop = '100%';
footer.style.position = 'absolute';
footer.style.display = `flex`;
footer.style.justifyContent = `center`;
footer.style.alignItems = `center`;
body.appendChild(footer);

const foot1 = document.createElement ('footer');
foot1.style.color = 'white';
foot1.textContent = 'hi! Isso é um rodapé'
footer.appendChild(foot1);


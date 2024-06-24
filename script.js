const body = document.querySelector(`body`);
body.style.backgroundColor = `white`;
body.style.display = `flex`;
body.style.justifyContent = `center`;
body.style.alignItems = `center`;
body.style.flexDirection = `column`


const nav = document.createElement('nav');
nav.style.width = '100%';
nav.style.height = '50px';
nav.style.backgroundColor = 'pink';
nav.style.display = 'flex';
nav.style.justifyContent = 'center';
nav.style.alignItems = 'center';
body.appendChild(nav)

const navT = document.createElement('p');
navT.style.color = 'white'
nav.appendChild(navT)

const div = document.createElement(`div`);
div.style.width = `800px`;
div.style.height = `450px`;
div.style.backgroundColor = `pink`;
div.style.marginTop = '12vh';
div.style.display = `flex`;
div.style.justifyContent = `center`;
div.style.alignItems = `center`;
div.style.flexDirection = `column`

body.appendChild(div);

const titulo = document.createElement(`h1`);
titulo.style.color = 'white';
titulo.textContent = 'Atividade Programação Web';
titulo.style.marginTop = '5vh';
titulo.style.marginLeft = '2vh';
div.appendChild(titulo);

const div2 = document.createElement('div');
div2.style.width = '600px';
div2.style.height = '300px';
div2.style.backgroundColor = 'pink';
div2.style.marginLeft = '-2vh';
div2.style.display = `flex`;
div2.style.justifyContent = `center`;
div2.style.alignItems = `center`;
div2.style.flexDirection = `column`
div.appendChild(div2);

const inputName = document.createElement(`input`);
inputName.placeholder = "Digite seu nome: "
inputName.style.width ='75%';
inputName.style.margin = '10px';
inputName.style.padding = '0.5vh'
div2.appendChild(inputName);

const inputN1 = document.createElement(`input`);
inputN1.placeholder = "Digite a primeira nota: "
inputN1.style.width ='75%';
inputN1.style.height = '20px';
inputN1.style.marginTop = '5vh';
inputN1.style.margin =  '10px';
inputN1.style.padding = '0.5vh'
div2.appendChild(inputN1);

const inputN2 = document.createElement(`input`);
inputN2.placeholder = "Digite a segunda nota: "
inputN2.style.width ='75%';
inputN2.style.height = '20px';
inputN2.style.marginTop = '5vh';
inputN2.style.margin = '10px';
inputN2.style.padding = '0.5vh'
div2.appendChild(inputN2);

const inputN3 = document.createElement(`input`);
inputN3.placeholder = "Digite a terceira nota: "
inputN3.style.width ='75%';
inputN3.style.padding = '0.5vh';
inputN3.style.marginTop = '5vh';
inputN3.style.margin = '10px';
div2.appendChild(inputN3);

const btn = document.createElement('button')
btn.style.width = '60%';
btn.textContent = 'Calcular sua média';
btn.style.backgroundColor = 'white';
btn.style.display = 'block';
btn.style.margin = 'auto';
btn.style.marginTop = '20px';
btn.style.marginTop = '6vh';
btn.style.marginLeft = '12vh';
btn.style.padding = '1.5vh'
btn.style.borderRadius = '1.5vh'
div2.appendChild(btn)

const resultado = document.createElement('p');
resultado.style.width = '58%';
resultado.style.height = '80px'
resultado.style.display = 'block'; 
resultado.style.margin = 'auto';
resultado.style.marginLeft = '16vh'
resultado.style.marginTop = '2.5vh'
resultado.style.textAlign = 'center';
resultado.style.color = 'black';
resultado.style.backgroundColor = 'pink';
div.appendChild(resultado);

btn.addEventListener('click', () => {
    const n1 = parseFloat(inputN1.value);
    const n2 = parseFloat(inputN2.value);
    const n3 = parseFloat(inputN3.value);
    const media = (n1 + n2 + n3) / 3;

    if (media>=6){
        
        resultado.textContent = `Bem-vindo (a), ${inputName.value}, sua média é, ${media.toFixed(1)}. Você foi APROVADO!`;

    }
    else{
    resultado.textContent = `Bem-vindo (a), ${inputName.value}, sua média é, ${media.toFixed(1)}. Você foi REPROVADO!`;
    }
    
})

const foot = document.createElement('footer');
foot.style.width = '100%';
foot.style.height = '50px';
foot.style.backgroundColor = 'pink';
foot.style.display = 'flex';
foot.style.justifyContent = 'center';
foot.style.position = 'relative';
foot.style.bottom = `-280px`
body.appendChild(foot);

const footerText = document.createElement('p');
footerText.style.textAlign = 'center';
foot.appendChild(footerText);


var noClicks= 0;

function yes() {
    //Add inLove to love classes
    document.querySelector('.background').innerHTML = '<css-doodle class="inLove" use="var(--rule)"></css-doodle>';
    document.querySelector('.question').innerHTML =  'Supuse que dirias que si, el mejor, te quiero mucho'
    document.querySelector('.NOPE').innerHTML= ''
    document.querySelector('.SIU').innerHTML= '<img src="alana.jpeg" alt="amor" class="amor">'
}

function no() {
    document.querySelector('.NOPE').innerHTML= '<button onclick="no()" style= "left: '+ (Math.random() * 90) + 'vw;top: '+ (Math.random() * 65 + 25) + 'vh;" class="noBtn">NO</button>';
    noClicks++;
    if (noClicks > 4) {
        document.querySelector('.NOPE').innerHTML= '<p class=noBtn>YA NO PUEDES PICAR MAS ESTE BOTON. PON QUE SI!</p>'
    }
}
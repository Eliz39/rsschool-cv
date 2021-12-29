const revealCode = document.querySelector('.reveal');
const code = document.getElementById('hidden');

function reveal(){
  code.classList.toggle('open');
}

revealCode.addEventListener('click', reveal);
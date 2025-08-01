function createHeart(x, y, fromLeft = true) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';
  heart.style.left = fromLeft ? '50px' : 'calc(100% - 70px)';
  heart.style.bottom = '60px';
  heart.style.fontSize = `${Math.random() * 15 + 20}px`;
  heart.style.transform = `translateX(${fromLeft ? x : -x}px) rotate(${Math.random() * 360}deg)`;

  document.getElementById('hearts-container').appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

// Disparar ráfagas de corazones
let interval = setInterval(() => {
  createHeart(Math.random() * 100, Math.random() * 100, true);
  createHeart(Math.random() * 100, Math.random() * 100, false);
}, 200);

// Parar ráfagas después de 5 segundos y mostrar el mensaje
setTimeout(() => {
  clearInterval(interval);
}, 5000);

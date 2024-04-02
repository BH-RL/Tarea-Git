
function waveAnimation() {
  var text = document.getElementById("waveText");
  text.style.position = "relative";
  var loop = setInterval(function() {
    var maxWidth = text.offsetWidth;
    var leftPosition = text.style.left.replace("px", "");
    var left = parseInt(leftPosition);
    if (left < -maxWidth) {
      left = 0;
    }
    text.style.left = left + "px";
  }, 100);
}

window.onload = waveAnimation;

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful');
    } else {
        alert('Please enter both username and password');
    }
});

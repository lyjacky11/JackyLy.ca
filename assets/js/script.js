function view_pdf(file) {
if (screen.width <= 768) {
   gdocs = "https://docs.google.com/viewer?url=" + location.href;
   document.getElementById('resume-pdf').href = gdocs + file + "&embedded=true";
 } else {
   document.getElementById('resume-pdf').href = file;
  }
}
function checkCaptcha() {
  if(grecaptcha.getResponse().length == 0) {
        document.getElementById('captchaError').style.display = 'block';
        return false;
    }
    document.getElementById('captchaError').style.display = 'none';
    return true;
}
function openNav() {
  document.getElementById("sideMenu").style.height = "45%";
}
function closeNav() {
  document.getElementById("sideMenu").style.height = "0";
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    startDelay: 500,
    backSpeed: 40,
    backDelay: 1250,
    loop: true,
    loopCount: Infinity,
  });

var inputs = document.getElementsByClassName('field');
Array.prototype.forEach.call(inputs, function(input) {
  input.addEventListener('focus', function() {
    input.classList.add('is-focused');
  });
  input.addEventListener('blur', function() {
    input.classList.remove('is-focused');
  });
  input.addEventListener('keyup', function() {
    if (input.value.length === 0) {
      input.classList.add('is-empty');
    } else {
      input.classList.remove('is-empty');
    }
  });
});

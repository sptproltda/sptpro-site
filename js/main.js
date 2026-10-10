(function () {
    var btn = document.getElementById("copy");
    var email = document.getElementById("email");
    btn.addEventListener("click", function () {
      var text = email.textContent;
      var done = function () { btn.textContent = "Copiado"; setTimeout(function () { btn.textContent = "Copiar"; }, 1800); };
      var fallback = function () {
        var r = document.createRange(); r.selectNodeContents(email);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        btn.textContent = "Selecionado";
        setTimeout(function () { btn.textContent = "Copiar"; }, 1800);
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fallback);
        } else { fallback(); }
      } catch (e) { fallback(); }
    });
  })();

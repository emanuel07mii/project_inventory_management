// static/authApp/js/scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const msg = document.getElementById("message-container");
    if (msg) {
      setTimeout(function () {
        msg.style.display = "none";
      }, 5000);
    }
});

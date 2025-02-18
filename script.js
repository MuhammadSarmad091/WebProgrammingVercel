function setCookie(cname, cvalue, exmin) {
    const d = new Date();
    d.setTime(d.getTime() + (exmin * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkSession() {
    let sessionId = getCookie("session-id");
    if (sessionId != "") {
        window.location.href = "gallery.html";
    } else {
        document.getElementById("galleryLink").href = "#";
    }
}

  function checkSession2() {
    let session = getCookie("session-id");

    if (session == "") {
        window.location.href = "login.html";
    }
}
  
  document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "Sarmad" && password === "1234") {
      setCookie("session-id", "userSession", 1); // Cookie expires in 1 minute
      alert("Login successful. You will be redirected to the gallery.");
      window.location.href = "gallery.html";
    } else {
      alert("Wrong username or password.");
    }
  }

  if (window.location.pathname.includes("gallery.html")) {
    checkSession2();
}
if (window.location.pathname.includes("login.html")) {
    checkSession();
  };
  
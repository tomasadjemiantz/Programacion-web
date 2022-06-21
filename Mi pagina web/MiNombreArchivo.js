function w3_open() { 
    var x = document.getElementById("mycourse");
    x.style.width = "200px";
    x.style.paddingTop = "15%";
    x.style.display = "block";
    }
    function w3_close() {
    document.getElementById("mycourse").style.display = "none";
  }
  function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
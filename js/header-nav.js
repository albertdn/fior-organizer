function fetchClient() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(xhttp.response);
      appendNav(data);
      return data;
    }
  };
  xhttp.open("GET", "/site-url.json", true);
  xhttp.send();
}

function appendNav(data) {
  var ntl = document.getElementById("national");
  var itl = document.getElementById("international");
  for (var i = 0; i < data.length; i++) {
    if(data[i].type == "ntl") {
      var li = document.createElement('li');
      li.innerHTML = '<a href="' + data[i].url + '">'+data[i].title+'</a>'
      ntl.appendChild(li);
    } else if(data[i].type == "itl") {
      var li = document.createElement('li');
      li.innerHTML = '<a href="' + data[i].url + '">'+data[i].title+'</a>'
      itl.appendChild(li);
    }
  }
}

var client = fetchClient();

const root = document.querySelector('#root');
const target = document.querySelectorAll('section');
const io_options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

let io_observer;

function io_callback (entries) {
  entries.forEach(function(entry){
    const ratio = entry.intersectionRatio;
    id = entry.target.getAttribute('id').toLowerCase();
    if (ratio > 0) {
      document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active');
    }
    else {
      document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active');
    }
  });

};

function createCookie(name, value) {
  document.cookie = name+"="+value+";";
};

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};

function changePlatform () {

  var platform = document.getElementById("platform").value;
  var images;
  if(platform == "ios"){
    images = document.getElementsByClassName("android");
    for (i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }
    images = document.getElementsByClassName("content-android");
    for (i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }
  }

  if(platform == "android"){
    images = document.getElementsByClassName("ios");
    for (i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }
    images = document.getElementsByClassName("content-ios");
    for (i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }
  }

  images = document.getElementsByClassName(platform);
  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("hidden");
  }
  images = document.getElementsByClassName("content-"+platform);
  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("hidden");
  }
  
  createCookie("platform", platform);
  
};

io_observer = new IntersectionObserver(io_callback, io_options);
for(i =0; i < target.length; i++){
  io_observer.observe(target[i]);
}

document.addEventListener('DOMContentLoaded', function() {
  var plat = readCookie("platform");

  document.getElementById("platform").value = plat;

  changePlatform();

}, false);

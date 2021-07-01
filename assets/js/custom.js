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

  platform_val = document.getElementById("platform").value;
  platform = "-"+platform_val;
  platform = platform.replace("-null","");

  images = document.querySelectorAll('img');
  for(i=0; i< images.length; i++){
    images[i].src = images[i].src.replace("-android.png","").replace("-ios.png","").replace("-.png").replace(".png","")+platform+".png";
  };
  
  createCookie("platform", platform_val);
  
};

io_observer = new IntersectionObserver(io_callback, io_options);
for(i =0; i < target.length; i++){
  io_observer.observe(target[i]);
}

document.addEventListener('DOMContentLoaded', function() {
  var plat = readCookie("platform");
  if ((plat == "") | (plat == undefined) | (plat == null)){
    plat = "null";
  };
  if(document.getElementById("platform") !== null){
  document.getElementById("platform").value = plat;

  changePlatform();
}
}, false);

const websites = [
  'http://corndog.io/',
  'https://tacospin.com/',
  'https://pointerpointer.com/',
  'https://cat-bounce.com/',
  'https://anotheruseless.website/ducksarethebest-com/',
  'https://thequietplaceproject.xyz/thequietplace',
  'https://procatinator.com/',
  'https://freerice.com/categories/english-vocabulary',
  'https://www.geoguessr.com/',
  'https://hackertyper.com/',
  'https://www.mapcrunch.com/',
  'https://findtheinvisiblecow.com/',
  'https://screamintothevoid.com/',
  'https://archive.org/web/',
  'https://stellarium-web.org/',
  'https://play2048.co/',
  'https://en.wikipedia.org/wiki/List_of_individual_dogs',
  'https://zoomquilt.org/',
  'https://apod.nasa.gov/apod/astropix.html',
  'https://musclewiki.com/',
  'https://www.internetlivestats.com/',
  'https://thisissand.com/',
  'http://radio.garden/search',
  'https://www.incredibox.com/',
  'https://trypap.com/',
  'https://explore.org/livecams/cats/kitten-rescue-cam',
  'https://29a.ch/sandbox/2011/neonflames/#',
  'https://www.whatshouldireadnext.com/',
  'https://myfridgefood.com/',
  'https://www.onread.com/',
  'http://weavesilk.com/',
  'https://eyebleach.me/',
  'https://en.wikipedia.org/wiki/List_of_conspiracy_theories',
  'http://orteil.dashnet.org/cookieclicker/',
  'https://xkcd.com/',
  'https://www.rainymood.com/'
]

function changeURL(){
  // stores website array length
  let length = websites.length;

  // limits random generator to values between 0 and array length, store it in var random
  let random = Math.floor(Math.random() * length);

  // gets the randomly selected url from the array
  let url = websites[random];

  // opens the url in a new tab ON PURPOSE.
  window.open(url, '_blank');
}

// sets the image to be an event listener for a click, triggers the changeURL function.
document.getElementById("getWebsite").addEventListener("click", changeURL);

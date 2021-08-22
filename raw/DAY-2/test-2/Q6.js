// How to implement setInterval of your own using setTimeout

// Solution:
function mySetInterval(callback, time) {
  let interval = { working: true };

  function setter() {
    callback();
    if (interval.working) setTimeout(setter, time);
  }
    setTimeout(setter, time);
    return interval
}

let i = mySetInterval(function () {
  console.log("Hi");
}, 1000);

setTimeout(function () {
    i.working = false;
},5000)
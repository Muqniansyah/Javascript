// resolver rejection
const resolver = (resolve, reject) => {
  const cakeReady = true;

  if (cakeReady) {
    resolve("selamat menikmati...");
  } else {
    reject("maaf tepung kami habis...");
  }
};

// function handle callback
function handlerSuccess(resolveCake) {
  console.log(resolveCake);
}

function handlerRejected(rejectCake) {
  console.log(rejectCake);
}

// buat objek promise
const cake = new Promise(resolver);

// pemanggilan fungsi
cake.then(handlerSuccess).catch(handlerRejected);

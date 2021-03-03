function work(a, b) {
  alert(a + b); // work keyfi bir metod veya fonksiyondur.
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(arguments);
  }

  console.log(this);
  wrapper.calls = [];

  return wrapper;
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert("çağrı:" + args.join()); // "çağrı:1,2", "çağrı:4,5"
}



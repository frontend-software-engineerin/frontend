// synchronous way of execution: first program runs and
// once its done running the second function runs

// 1. Make a toast (2 mins)
// 2. Scramble eggs (3 mins)
// 3. Brew coffee (4 mins)

function makeToast() {
  // simulating for 2 seconds delay
  const start = Date.now();
  while (Date.now() - start < 2000) {}
  alert("Toast is ready");
}

function scrambleEggs() {
  // simulating for 3 seconds delay
  const start = Date.now();
  while (Date.now() - start < 3000) {}
  alert("Eggs are scrambled");
}

function brewCoffee() {
  // simulating for 4 seconds delay
  const start = Date.now();
  while (Date.now() - start < 4000) {}
  alert("Coffee is ready");
}

// makeToast();
// scrambleEggs();
// brewCoffee();

// asynchronous: code can execute multiple tasks (function) without
// waiting for each task to complete

// 1. Make a toast (2 mins)
// 2. Scramble eggs (3 mins)
// 3. Brew coffee (4 mins)

function makeToasts(callback) {
  alert("Making toast ...");
  // simulating for 2 seconds delay
  setTimeout(() => {
    alert("Toast is ready");
  }, 2000);
}

function scrambleEggss() {
  // simulating for 3 seconds delay
  alert("Scrambling eggs ...");
  // simulating for 2 seconds delay
  setTimeout(() => {
    alert("Egg is ready");
  }, 3000);
}

function brewCoffees() {
  // simulating for 4 seconds delay
  alert("brewing coffee ...");
  // simulating for 2 seconds delay
  setTimeout(() => {
    alert("coffee is ready");
  }, 4000);
}

// makeToasts(() => {});
// scrambleEggss(() => {});
// brewCoffees(() => {});

// Example of an async await execution

async function fetchUser() {
  try {
    const res = await fetch("https://app.onlydust.com/");
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

fetchUser();

// Assignment:

// Write a synchronous program that will
// 1.cook for 4 mins
// 2. Wash (laundry) 10 mins
// 3. eat 8 mins

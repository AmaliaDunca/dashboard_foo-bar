document.addEventListener("DOMContentLoaded", init);
//const data = FooBar.getData();
// const newData = JSON.parse(FooBar.getData());

function init() {
  //little man animation

  setInterval(update, 2000);
}

update();

function update() {
  const data = JSON.parse(FooBar.getData());

  handleBartenders(data);
  handleQueue(data.queue);
  bartenders(data.bartenders);
  stateBartenders(data.bartenders);
  taskBartenders(data.bartenders);
}

function handleQueue(queue) {
  document.querySelector(" #queue h2").textContent = queue.length;
  document.querySelector("#queue #qv").style.width = 56 * queue.length + "px";
}

function handleBartenders(taps) {
  //console.log(taps);
}

//get  jonas

function bartenders(bartenders) {
  // get bartenders names
  const all = document.querySelectorAll(".bartender");
  all.forEach((div, index) => {
    div.querySelector("h1").textContent = bartenders[index].name;
    div.querySelector(".state").textContent = bartenders[index].status;
    if (bartenders[index].servingCustomer >= 1) {
      div.querySelector(".serving").textContent =
        bartenders[index].servingCustomer;
    } else {
      div.querySelector(".serving").textContent = "not serving custumer";
    }

    console.log(bartenders[index]);

    /* if (bartenders[index].currentCustomer.beingServed === "true") {
      div.querySelector(".serving").innerHTML = "coustumer is being served ";
    } else {
      div.querySelector(".serving").innerHTML =
        "coustumer is not being served ";
    } */
  });
}

function stateBartenders(bartenders) {
  //document.querySelector(".stateJ").textContent = bartenders[1].status;
}

function taskBartenders(bartenders) {
  const all = document.querySelectorAll(".bartender");
  all.forEach((div, index) => {
    console.log(bartenders[index].statusDetail);
    if (bartenders[index].statusDetail === "pourBeer") {
      div.querySelector("img").src = "svg/pour-beer_icon.svg";
    } else if (bartenders[index].statusDetail === "startServing") {
      div.querySelector("img").src = "svg/bartender-white.svg";
    } else if (bartenders[index].statusDetail === "releaseTap") {
      div.querySelector("img").src = "svg/relese-tab_icon.svg";
    } else if (bartenders[index].statusDetail === "waiting") {
      div.querySelector("img").src = "svg/waiting.svg";
    } else if (bartenders[index].statusDetail === "receivePayment") {
      div.querySelector("img").src = "svg/recive_money.svg";
    } else if (bartenders[index].statusDetail === "reserveTap") {
      div.querySelector("img").src = "svg/reserve-tab_icon.svg";
    }
  });
}

//currentCustomer.beingServed (true/false)

/* else if (bartenders[index].currentCustomer.beingServed
 === "true") {
      div.querySelector(".serving").innerHTML = "coustumer is being served ";
    } */

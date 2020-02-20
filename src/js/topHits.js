(function() {
  ("use strict");

  const topFive = require("../assets/urls.json");

  function addItemList(item) {
    let $li = document.createElement("li");
    let a = document.createElement("a");
    let span = document.createElement("span");
    a.setAttribute("href", item.url);
    a.textContent = item.shortUrl;
    span.textContent = item.hits;

    $li.append(a);
    $li.append(span);

    document.querySelector("ul").appendChild($li);
  }

  for (let i = 0; i < 5; i++) {
    addItemList(topFive[i]);
  }
})();

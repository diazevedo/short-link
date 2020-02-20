(function() {
  ("use strict");

  const $form = document.querySelector("form");
  const $input = document.querySelector("input");
  const $copyButton = document.querySelector("#button-copy");

  const $button = document.querySelector("#button-shortener");

  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      $input.value = res.data.shortUrl.secure;
      $button.classList.add("hidden");
      $copyButton.classList.remove("hidden");
    }
  };

  $form.addEventListener("submit", event => {
    console.log("sdsd");

    event.preventDefault();

    xhr.open(
      "GET",
      `https://cu8.in/api/?action=short&urls=|https://${$input.value}`,
      true
    );

    xhr.send();
  });
})();

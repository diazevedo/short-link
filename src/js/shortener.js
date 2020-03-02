(function() {
  ("use strict");

  const $form = document.querySelector("form");
  const $input = document.querySelector("input");

  const $spanShortener = document.querySelector("#span-shortener");
  const $spanCopy = document.querySelector("#span-copy");

  const $button = document.querySelector("#button");

  const keysAllowed = [17, 67, 88];

  const xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      $input.value = res.data.shortUrl.secure;
      toggleButtons();
    }
  };

  function toogleShorterner() {
    $button.classList.remove("copy");
    $button.classList.add("shortener");

    $spanShortener.classList.add("fade-in");
    $spanShortener.classList.remove("fade-out");

    $spanCopy.classList.add("fade-out");
    $spanCopy.classList.remove("fade-in");

    $input.classList.toggle("searched");
  }

  function toggleCopy() {
    $button.classList.add("copy");
    $button.classList.remove("shortener");

    $spanShortener.classList.add("fade-out");
    $spanShortener.classList.remove("fade-in");

    $spanCopy.classList.add("fade-in");
    $spanCopy.classList.remove("fade-out");

    $spanShortener.classList.add("hidden");

    $input.classList.toggle("searched");
  }

  function toggleButtons() {
    if ($button.classList.contains("shortener")) {
      toggleCopy();
    } else if ($button.classList.contains("copy")) {
      toogleShorterner();
    }
  }

  $form.addEventListener("submit", event => {
    event.preventDefault();

    const validValue = $input.value.trim().length > 0;

    if ($button.classList.contains("shortener") && validValue) {
      xhr.open(
        "GET",
        `https://cu8.in/api/?action=short&urls=|https://${$input.value}`,
        true
      );

      xhr.send();
    } else if (validValue) {
      toggleButtons();
    }
  });

  $input.addEventListener("keydown", event => {
    if (
      !keysAllowed.includes(event.keyCode) &&
      $button.classList.contains("copy")
    ) {
      toogleShorterner();
    }
  });
})();

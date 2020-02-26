(function() {
  const $copyButton = document.querySelector("#button-copy");
  const $button = document.querySelector("#button-shortener");
  const $inputUrl = document.querySelector("[name=url]");

  $copyButton.addEventListener("click", () => {
    $inputUrl.select();
    $inputUrl.setSelectionRange(0, 99999);
    document.execCommand("copy");

    $copyButton.classList.toggle("hidden");
    $button.classList.toggle("hidden");
  });
})();

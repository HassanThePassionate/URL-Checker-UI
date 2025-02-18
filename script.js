const question = document.querySelectorAll(".question");
const url = document.querySelector("#url");
const error = document.querySelector(".error-text");
const btn = document.querySelector("#check-btn");
const loader = document.querySelector(".loader");
const result = document.querySelector(".result");
const isValid = "^(https?|ftp)://[^s/$.?#].[^s]*$";
question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
const urlChecking = () => {
  const urlInput = url.value;
  const urlRegex = new RegExp(isValid);
  if (urlInput === "") {
    url.classList.remove("error-input");
    error.style.display = "none";
    alert("Please Enter a URL");
    return;
  }
  if (urlRegex.test(urlInput)) {
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
      result.style.display = "flex";
    }, 2000);
  } else {
    url.classList.add("error-input");
    error.style.display = "block";
  }
  url.addEventListener("input", () => {
    const urlInput = url.value;
    if (urlInput === "") {
      url.classList.remove("error-input");
      error.style.display = "none";
      result.style.display = "none";
    }
  });
};
btn.addEventListener("click", urlChecking);

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const img = document.getElementById("img");

const rbtn = document.getElementById("rbtn");
const lbtn = document.getElementById("lbtn");

function changeSlide(title, desc, count, image) {
  // fade out animation
  text1.classList.add("opacity-0", "translate-y-4");
  text2.classList.add("opacity-0", "translate-y-4");

  setTimeout(() => {
    // change content
    text1.innerHTML = title;
    text2.innerHTML = desc;
    text3.innerHTML = count;
    img.src = image;

    // fade in animation
    text1.classList.remove("opacity-0", "translate-y-4");
    text2.classList.remove("opacity-0", "translate-y-4");
  }, 300);
}

// Right button
rbtn.addEventListener("click", () => {
  changeSlide(
    "Receive a full 100% refund on your order",
    "Stay Thrilled with Monthly Menu Additions",
    "2 / 2",
    "../image/cash.jpg",
  );
});

// Left button
lbtn.addEventListener("click", () => {
  changeSlide(
    "Go Sell. Go Earn. Go Wingmall.",
    "Cambodia’s 100% homegrown e-commerce platform is calling on merchants nationwide to rise above, grow bigger, and keep every riel you make. No commissions. No tricks. Just your business, your profit — powered by Wingmall.",
    "1 / 2",
    "../image/wingmall_go.png",
  );
});

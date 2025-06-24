const scrollDownBtn = document.getElementById("scroll-down-btn");
const exploreSection = document.getElementById("explore-section");

scrollDownBtn.addEventListener("click", function() {
  exploreSection.scrollIntoView({
    behavior: "smooth"
  });
});

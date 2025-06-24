const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}

function myFunctionURL()
{

    window.location.href="https://pagbilao.gov.ph/pagbilao-history";

}

function myFunctionFB()
{

    window.location.href="https://www.facebook.com/pagbilaogov";

}

function myFunctionHOME()
{

    window.location.href="NEWWEBSITE_HOMEPAGE.html";

}
function myFunctionRESORT(){
window.location.href="resort.html";
}
function myFunctionSITE()
    {
    window.location.href="historical.html";
    }

function myFunctionTROPICAL()
{
    window.location.href="https://maps.app.goo.gl/rES34Gva7qofeaGn7";
}
function myFunctionAltarMayor()
{
    window.location.href="https://maps.app.goo.gl/L3QqHnLSXrLk45Lz9";
}
function myFunctionAmaoFalls()
{
    window.location.href="https://maps.app.goo.gl/WmRnWfNS3RCoU7VB6";
}
function myFunctionBaleteBeach()
{
    window.location.href="https://maps.app.goo.gl/3tRz5Nu8vpVTeTSn6";
}
function myFunctionBalugbogBaboy()
{
    window.location.href="https://maps.app.goo.gl/9YJFupQCi74pKtMv5";
}
function myFunctionBilaranSandbar()
{
    window.location.href="https://maps.app.goo.gl/mvc3nUSwrQyf46H5A";
}
function myFunctionDaunganPari()
{
    window.location.href="https://maps.app.goo.gl/n1Rc6o1T4qYwCKte7";
}
function myFunctionIringanFalls()
{
    window.location.href="https://maps.app.goo.gl/h5aHN2yXTSNdS7nx9";
}
function myFunctionKamaluyaFalls()
{
    window.location.href="https://maps.app.goo.gl/9oC9rwp5wbWSM5nU9";
}
function myFunctionKwebangLampas()
{
    window.location.href="https://maps.app.goo.gl/EvhDuEBQ9hHnsW2x6";
}
function myFunctionLaIslaSalaminCave()
{
    window.location.href="https://maps.app.goo.gl/vUKgNwF2G6FrxH8N8";
}
function myFunctionLaIslaSalamin()
{
    window.location.href="https://maps.app.goo.gl/vUKgNwF2G6FrxH8N8";
}
function myFunctionLimaaw()
{
    window.location.href="https://maps.app.goo.gl/joJGVTPWxupe6pV68";
}
function myFunctionMangilalanCave()
{
    window.location.href="https://maps.app.goo.gl/CUinDniuVQiMc4UQA";
}
function myFunctionPalsabangonFalls()
{
    window.location.href="https://maps.app.goo.gl/YQSR9DJTTgUoLxW37";
}
function myFunctionPalsabangonRiver()
{
    window.location.href="https://maps.app.goo.gl/CzzXSNHn8NYrVo8U8";
}
function myFunctionPatayanIsland()
{
    window.location.href="https://maps.app.goo.gl/Red9rGFEjyUQEF4JA";
}
function myFunctionRizalMonument()
{
    window.location.href="https://maps.app.goo.gl/fkx47YR3X2M8sfhK7";
}
function myFunctionSibatiyaCave()
{
    window.location.href="https://maps.app.goo.gl/vstgCeYCCAYWRGTG6";
}
function myFunctionTambakRiver()
{
    window.location.href="https://maps.app.goo.gl/CfJrgFa6XGaTMDBX7";
}
function myFunctionNatural()
{
    window.location.href="Natural.html";
}

function myFunctionImmovable()
{
    window.location.href="historical.html";
}

function myFunctionInstituition()
{
    window.location.href="restaurant.html";
}
function myFunctionGform()
{
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfR9qxO0Y3A736cej7PFJQmtQoVeenzmaYWD6WCllVVYIggfQ/viewform?fbclid=IwY2xjawLHLBZleHRuA2FlbQIxMABicmlkETFpbjNIR2lYSkM1NzNiV1MxAR7r_UgqjyeftnvfTjG-SClFY9Tff1BqAAtujqPJzqeBzunsMmtZqRsS1GbdIQ_aem_cw0MXwvUjctzCWifk-elmg";
}

document.addEventListener("DOMContentLoaded", function() {
    var homelink = document.getElementById("home");
    var aboutlink = document.getElementById("about");
    var travellink = document.getElementById("travel");
    var destinationslink = document.getElementById("destinations");

    aboutlink.addEventListener("click", function(event) {
        event.preventDefault();

        var content1 = document.getElementsByClassName("destinations")[0];
        content1.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    });

    destinationslink.addEventListener("click", function(event) {
        event.preventDefault();

    var content1 = document.getElementsByClassName("travel")[0];
    content1.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
});

// JavaScript for handling comments
function addComment() {
    var commentInput = document.getElementById("commentInput");
    var commentText = commentInput.value.trim();

    if (commentText !== "") {
        var commentContainer = document.querySelector(".comments-container");
        var commentElement = document.createElement("div");
        commentElement.textContent = commentText;

        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            deleteComment(commentText);
            commentContainer.removeChild(commentElement);
        };

        // Append delete button to comment element
        commentElement.appendChild(deleteButton);

        // Append comment element to container
        commentContainer.appendChild(commentElement);

        // Save the comment to localStorage
        saveComment(commentText);

        // Clear the input field after adding the comment
        commentInput.value = "";
    } else {
        alert("Please enter a valid comment.");
    }
}

// Function to save comment to localStorage
function saveComment(comment) {
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to load comments from localStorage
function loadComments() {
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    var commentContainer = document.querySelector(".comments-container");
    commentContainer.innerHTML = ""; // Clear existing comments
    comments.forEach(function(comment) {
        var commentElement = document.createElement("div");
        commentElement.textContent = comment;

        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            deleteComment(comment);
            commentContainer.removeChild(commentElement);
        };

        // Append delete button to comment element
        commentElement.appendChild(deleteButton);

        // Append comment element to container
        commentContainer.appendChild(commentElement);
    });
}

// Function to delete comment from localStorage
function deleteComment(comment) {
    var comments = JSON.parse(localStorage.getItem("comments")) || [];
    var index = comments.indexOf(comment);
    if (index !== -1) {
        comments.splice(index, 1);
        localStorage.setItem("comments", JSON.stringify(comments));
    }
}

// Load comments when the page is loaded
window.onload = function() {
    loadComments();
};
// script.js

function validateForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Please enter your username.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    // Additional validation logic can be added here if needed

    // If all validation passes, return true to submit the form
    return true;
}





animateContent([" .home .content h5, .home  .content h1, .home .content p, .home .content .search"],".comment-section ",".video-containers");

scrollTirggerAnimation(" .travel", [".travel .box1", ".travel .box2", ".travel .box3"]),".comment-section ",".video-containers";

scrollTirggerAnimation(" .feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"],".comment-section ",".video-containers");

scrollTirggerAnimation(" .article", [".article .label", ".article .heading"],".comment-section ",".video-containers");

swipeAnimation("  .destinations", [".destinations .heading", ".destinations .content"],".comment-section ",".video-containers")

swipeAnimation(" .article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"],".comment-section ",".video-containers")

galleryAnimation(" .destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"],".comment-section ",".video-containers")

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"],".comment-section ",".video-containers")

galleryAnimation(" .feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"],".comment-section ",".video-containers")

gsap.utils.toArray('.destination-img-animate').forEach(img => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
  });
});


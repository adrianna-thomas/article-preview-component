alert("I am an alert!")

document.querySelector(".share-btn").addEventListener("click", function() {
    document.querySelector(".open-share").style.display = "none";
    document.querySelector(".open-share").style.display = "flex";
});



document.querySelector(".popup-btn").addEventListener("click", function() {
    document.querySelector(".open-share").style.display = "none";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".open-share").style.display = "none";
});
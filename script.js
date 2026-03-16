const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Make NO button run away
noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Open cute page when YES is clicked
yesBtn.addEventListener("click", function () {
    window.location.href = "yes.html";
});
document.querySelectorAll(".key").forEach(
    el => el.addEventListener("click",
        e => new Audio('sounds/' + e.target.getAttribute("data-value") + '.wav').play()
    )
);
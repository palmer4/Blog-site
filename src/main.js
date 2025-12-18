const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "🎇" : "🐱‍👤";
});


document.querySelectorAll("post").forEach((post, i) => {
    post.computedStyleMap.opacity = 0;
    post.computedStyleMap.transform = `translateY(40px)`;
    
    setTimeout(() => {
        post.style.transition = "opacity 0.8s";
        post.style.opacity = 1;
        post.style.transform = "translateY(0)";
    }, i * 200);
});
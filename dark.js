document.getElementById("theme-toggle").addEventListener("change", function() {
    const themeStyle = document.getElementById("theme-style");
    if (this.checked) {
		// body.style.background="black";
        themeStyle.href = "dark.css";
    } else {
        themeStyle.href = "Dairy.css";
}
});

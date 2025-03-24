function Search() {
    let query = document.getElementById("search-box").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
}

function inputFocus() {
    document.getElementById("search-bar").classList.add("search-bar-focus")
}

function inputBlur() {
    document.getElementById("search-bar").classList.remove("search-bar-focus")
}

document.getElementById("search-icon").addEventListener("click", Search);
document.getElementById("search-box").addEventListener("focus", inputFocus);
document.getElementById("search-box").addEventListener("blur", inputBlur);

const button = document.getElementById("test")

button.addEventListener("click", test)

function test() {
    const parentTitle = 'Extension bookmarks'
    chrome.bookmarks.create({ 'title': parentTitle });
    document.getElementById("test").innerHTML = "All done!";
}
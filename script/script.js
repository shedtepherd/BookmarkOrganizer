const button = document.getElementById("test")

button.addEventListener("click", test)

function test() {
    // Create array of domains based on bookmarks
    // Create folders named after array 
    // Move bookmarks based on domain name to folders name after domains
    const parentTitle = 'Extension bookmarks'
    chrome.bookmarks.create({ 'title': parentTitle });
    document.getElementById("test").innerHTML = "All done!";
}
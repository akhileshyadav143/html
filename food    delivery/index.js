console.log("JavaScript is connected!");

const searchInput = document.querySelector("main input");

if (searchInput) {

```
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {
            alert("Please enter something!");
        } else {
            alert("Searching for: " + searchValue);
        }

    }

});
```

} else {
console.log("Search input not found!");
}

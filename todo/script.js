const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = "";
        saveData();
    }
}

// Check/uncheck or delete on click
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Press Enter to add task
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") addTask();
});

// Save to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load from localStorage on page open
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const toggle = document.querySelector(".dark-mode-toggle");
    if (document.body.classList.contains("dark")) {
        toggle.innerHTML = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggle.innerHTML = "🌙";
        localStorage.setItem("darkMode", "disabled");
    }
}

// Load dark mode preference on page open
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    document.querySelector(".dark-mode-toggle").innerHTML = "☀️";
}

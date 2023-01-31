const input = document.querySelector("input");
const result = document.querySelector(".result");
const lsPropName = "arr";
const sortButton = document.querySelector(".sort");

const arr = [];
const ls = localStorage.getItem(lsPropName);
if (ls) {
    try {
    JSON.parse(ls).forEach((el) => arr.push(el));
    } catch (e) {
    console.error(e);
    }
}
function render() {
    result.innerHTML = "";
    arr.forEach((item) =>
    result.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
    );
}
function handleClickSort() {
    const clsn = "sort_sorted";
    sortButton.classList.toggle(clsn);
    if (sortButton.classList.contains(clsn)) {
    arr.sort((a, b) => a.localeCompare(b));
    } else {
    arr.sort((a, b) => b.localeCompare(a));
    }
    render()
}
function handleClickSave() {
    if (input.value) {
    arr.push(input.value);
    localStorage.setItem(lsPropName, JSON.stringify(arr));
    }  
    input.value =""
    render()
}

sortButton.addEventListener("click", handleClickSort);
document.querySelector(".save").addEventListener("click", handleClickSave);
render()

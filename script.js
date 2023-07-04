const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ""){
        // alert("You must write something!");
        document.querySelector(".noInput").style.display = "block";

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        console.log("You have entered");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        document.querySelector(".noInput").style.display = "none";
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

inputBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
})

// Storing the values even after refreshing the page
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Now we need to display this data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
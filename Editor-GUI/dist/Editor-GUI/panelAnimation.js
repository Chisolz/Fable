const consoleBtn = document.getElementById("ConsoleButton");
const fileSysBtn = document.getElementById("FilesButton");

const consolePanel = document.getElementById("ConsolePanel");
const filesPanel = document.getElementById("FileSystemPanel");

const fileContextMenu = document.getElementById("filesContextMenu");

let consoleActive = false;
let filesActive = false;

consoleBtn.addEventListener("click", ()=>{
    if (consoleActive) {
        consolePanel.classList.remove("active");
        consoleActive = false;
        return;
    }

    consolePanel.classList.add("active");
    filesPanel.classList.remove("active");
    consoleActive = true;
});

fileSysBtn.addEventListener("click", ()=>{
    if (filesActive) {
        filesPanel.classList.remove("active");
        filesActive = false;
        return;
    }
    
    consolePanel.classList.remove("active");
    filesPanel.classList.add("active");
    filesActive = true;
});

// Shows context menu if right click in file system
filesPanel.addEventListener("contextmenu", (event) => {
    console.log("test");
    if (!filesActive) return;
    event.preventDefault();

    let rect = filesPanel.getBoundingClientRect();
    fileContextMenu.style.top = `${event.clientY - 10}px`;
    fileContextMenu.style.left = `${event.clientX - 10}px`;
    fileContextMenu.classList.add("active");    
});

// Hides context menu if mouse leaves container
fileContextMenu.addEventListener("mouseleave", () => {
    fileContextMenu.classList.remove("active");
});
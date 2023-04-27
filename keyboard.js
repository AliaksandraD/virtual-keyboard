const keyBoardElement = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
     9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
     20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
     16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 16,38,
     17, 91, 18, 32, 18, 17, 37, 40, 39];
let body = document.body;
body.className = "container";

let content = document.createElement("div")
content.className ="content-cont";
body.appendChild(content);

let h1 = document.createElement("h1");
h1.innerHTML = "RSS Virtual Keyboard";
content.appendChild(h1)

let textArea = document.createElement("textarea");
textArea.className = "textarea-cont";
content.appendChild(textArea)

let keyBoard = document.createElement("div");
keyBoard.className = "keyboard";
content.appendChild(keyBoard)


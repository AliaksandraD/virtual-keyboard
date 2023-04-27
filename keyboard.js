const keyBoardElement = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
    9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46,
    20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
    16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
    17, 91, 18, 32, 18, 17, 37, 40, 39];

console.log(keyBoardElement.length);

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

let keyBoardCont = document.createElement("div");
keyBoardCont.className = "keyboard";
content.appendChild(keyBoardCont)

let keyBoard = document.createElement("div");
keyBoard.className = "keyboard__key-cont";
keyBoardCont.appendChild(keyBoard)


let x =[]
document.onkeypress = function (e) {
    x.push(e.charCode);
    console.log(x);
}

function getElentsKeyboard () {
let show = '';
for (let i = 0; i<=keyBoardElement.length;i++){
    if (i === 13){
        show += '<div class = "keyboard__key__type-1 new-row">Backspace</div>'
    }else if (i === 14) {
        show += '<div class = "keyboard__key__type-1 new-row">Tab</div>'
    } else if (i === 28){
        show +='<div class = "keyboard__key__type-1 new-row">Del</div>'
    }else if(i===29){
        show +='<div class = "keyboard__key__type-2 new-row">CapsLock</div>'
    }else if(i===41){
        show +='<div class = "keyboard__key__type-2 new-row">Enter</div>'
    }else if(i===53){
        show +='<div class = "keyboard__key__type-1 new-row">&#9650;</div>'
    }
    else if(i===42){
        show +='<div class = "keyboard__key__type-2 new-row">Shift</div>'
    }else if(i===54){
        show +='<div class = "keyboard__key__type-1 new-row">Shift</div>'
    } else if(i===55 || i===60){
        show +='<div class = "keyboard__key__type-1 new-row">Ctrl</div>'
    }else if(i===56){
        show +='<div class = "keyboard__key__type-1 new-row">Win</div>'
    }else if(i===57 || i===59){
        show +='<div class = "keyboard__key__type-1 new-row">Alt</div>'
    }else if(i===58){
        show +='<div class = "keyboard__key__type-3 new-row"></div>'
    }
    else if(i===61){
        show +='<div class = "keyboard__key__type-1 new-row">&#9668;</div>'
    }
    else if(i===62){
        show +='<div class = "keyboard__key__type-1 new-row">&#9660;</div>'
    }else if(i===63){
        show +='<div class = "keyboard__key__type-1 new-row">	&#9658;</div>'
    }else if (i===64){
        show.display = 'none'
    }else {
        show += '<div class = "keyboard__key">'+String.fromCharCode(keyBoardElement[i])+'</div>';
    }

}
keyBoard.innerHTML = show;
}
getElentsKeyboard ()
const keyBoardElement = ['`', '1', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift',
    'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

console.log(keyBoardElement.length);

const body = document.body;
body.className = "container";



const main = document.createElement("main")
body.prepend(main);
const content = document.createElement("div")
content.className ="content-cont";
main.appendChild(content);

const h1 = document.createElement("h1");
h1.innerHTML = "RSS Virtual Keyboard";
content.appendChild(h1)

const textArea = document.createElement("textarea");
textArea.className = "textarea-cont";
content.appendChild(textArea)

const keyBoardCont = document.createElement("div");
keyBoardCont.className = "keyboard";
content.appendChild(keyBoardCont)

const keyBoard = document.createElement("div");
keyBoard.id = 'key-board';
keyBoard.className = "keyboard__key-cont";
keyBoardCont.appendChild(keyBoard)

function getElentsKeyboard () {
let show = '';
for (let i = 0; i<=keyBoardElement.length;i++){
    if (i === 12){
        show += '<button id = "back" class = "back" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if (i === 13) {
        show += '<button id = "tab" class = "tab" data-tab="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    } else if (i === 27){
        show +='<button id = "del" class = "del" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===28){
        show +='<button id = "caps" class = "caps" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===40){
        show +='<button id="enter" class = "enter" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }
    else if(i===41){
        show +='<button class = "shift" data-shift="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===52){
        show +='<button class = "arrow" data-arrow="'+keyBoardElement[i]+'">&#9650;</button>'
    }else if(i===53){
        show +='<button class = "shift-right" data-shift="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    } else if(i===54){
        show +='<button id = "control-left" class = "ctrl" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===59){
        show +='<button id = "control-right" class = "ctrl" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===55){
        show +='<button id="win" class = "win" data="'+keyBoardElement[i]+'">Win</button>'
    }else if(i===56){
        show +='<button id="alt-r" class = "alt" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===58){
        show +='<button id="alt-l" class = "alt" data="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>'
    }else if(i===57){
        show +='<button id = "space" class = "space" data-space="'+keyBoardElement[i]+'"></button>'
    }
    else if(i===60){
        show +='<button class = "arrow" data-arrow="'+keyBoardElement[i]+'">&#9668;</button>'
    }
    else if(i===61){
        show +='<button class = "arrow" data-arrow="'+keyBoardElement[i]+'">&#9660;</button>'
    }else if(i===62){
        show +='<button class = "arrow" data-arrow="'+keyBoardElement[i]+'">&#9658;</button>'
    }else if (i===63){
        show.display = 'none'
    }else {
        show += '<button class = "keyboard__key" data-value="'+keyBoardElement[i]+'">'+`${keyBoardElement[i]}`+'</button>';
    }

}
keyBoard.innerHTML = show;

}
getElentsKeyboard ()

let button = document.querySelectorAll('.keyboard__key')// путь к обычным кнопкам
let shift = document.querySelectorAll('.shift');
let spaceBTN = document.querySelector('#space');
let caps = document.querySelector('#caps');
let tab = document.querySelector('#tab')
let backspace = document.querySelector('#back');
let deleteBtn = document.querySelector('#del');
let enterBTN = document.querySelector('#enter')
let ctrlLeft = document.querySelector('#control-left')
let ctrlRight = document.querySelector('#control-right')
let winBTN=document.querySelector('#win')
let altR = document.querySelector('#alt-r');
let altL = document.querySelector('#alt-l')

let btnCom = keyBoard.childNodes
let space = []

document.addEventListener('keydown', (e) =>{
    console.log(e.code);
    if (e.key === ' '){                                    // для пробела
        spaceBTN.classList.add('keyboard__key__active')
        space.push(e.key)
        textArea.innerText = space.join('')
    }else if (e.key === 'Tab'){                                //для таба
        e.preventDefault()
        space.push('    ')
        textArea.innerText = space.join('')
        tab.classList.add('keyboard__key__active')
    }else if (e.key.length==1){  
        // space.push(clikesd.textContent)      
        //для обычных
        document.querySelector('#key-board .keyboard__key[data-value = "'+e.key+'"]').classList.add('keyboard__key__active')
        space.push(e.key)
        textArea.innerText = space.join('')


    } 
    
    
    else if (e.key === 'Backspace'){
        space.pop();
        textArea.value = space.join('')
        backspace.classList.add('keyboard__key__active')
    } else if (e.code === 'ShiftLeft'){                                                             //!!!!!!!!
        document.querySelector('#key-board .shift[data-shift = "'+e.key+'"]').classList.add('keyboard__key__active')
    }else if (e.code === 'ShiftRight'){                                                   //!!!!!!!!
        document.querySelector('#key-board .shift-right[data-shift = "'+e.key+'"]').classList.add('keyboard__key__active')
    } else if (e.key === 'Delete'){
        deleteBtn.classList.add('keyboard__key__active')
    } else if (e.key === 'Enter'){
        space.push(' ')
        textArea.value +=  '\r\n' + space
        space.push(e.key.length==1)
        textArea.innerText = space.join('')
        enterBTN.classList.add('keyboard__key__active')
    } 
    // else if (e.key === 'CapsLock'){
    //     caps.classList.add('keyboard__key__active')
        // if (caps.classList.contains('keyboard__key__active')){
        //     caps.classList.remove('keyboard__key__active')
     
        //         // document.querySelector('#key-board .shift-right[data-shift = "'+e.key+'"]').classList.remove('keyboard__key__upper')
         
        // }
        // else{
        //     caps.classList.add('keyboard__key__active')
           
        //     // document.querySelector('#key-board .shift-right[data-shift = "'+e.key+'"]').classList.add('keyboard__key__upper')
                    
        // }
    // }
else if (e.code === 'ControlLeft'){
ctrlLeft.classList.add('keyboard__key__active')
}
// else if (e.code === 'ControlRight'){
//     ctrlRight.classList.add('keyboard__key__active')
//     }
      else if (e.key === 'Meta') {
        winBTN.classList.add('keyboard__key__active')
      }
      else if (e.code === 'AltRight') {
        e.preventDefault()
        altL.classList.add('keyboard__key__active')
      }
      else if (e.code === 'AltLeft') {
        altR.classList.add('keyboard__key__active')
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp' 
      || e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        document.querySelector('#key-board .arrow[data-arrow = "'+e.key+'"]').classList.add('keyboard__key__active')
        let ar = document.querySelector('#key-board .arrow[data-arrow = "'+e.key+'"]').innerHTML
        space.push(ar)
        textArea.innerText = space.join('')
        
      }
 }) 

document.addEventListener('keyup', (e) =>{
       if (e.key === ' '){                                     // для пробела
       spaceBTN.classList.remove('keyboard__key__active')
    } else if (e.key === 'Tab'){                                //для таба
        tab.classList.remove('keyboard__key__active')
    } else if (e.key.length==1){
        document.querySelector('#key-board .keyboard__key[data-value = "'+e.key+'"]').classList.remove('keyboard__key__active')
    }else if (e.key === 'Backspace'){
        backspace.classList.remove('keyboard__key__active')
    }else if (e.code === 'ShiftLeft'){
        console.log(e.code);
        document.querySelector('#key-board .shift[data-shift = "'+e.key+'"]').classList.remove('keyboard__key__active')
    }else if (e.code === 'ShiftRight'){
        console.log(e.code);
        document.querySelector('#key-board .shift-right[data-shift = "'+e.key+'"]').classList.remove('keyboard__key__active')
    }else if (e.key === 'Delete'){
        deleteBtn.classList.remove('keyboard__key__active')
    }else if (e.key === 'Enter'){
        enterBTN.classList.remove('keyboard__key__active')
    }else if (e.code === 'ControlLeft'){
        ctrlLeft.classList.remove('keyboard__key__active')
        }
        // else if (e.code === 'ControlRight'){
        //     ctrlRight.classList.remove('keyboard__key__active')
        //     }
        else if (e.key === 'Meta') {
            winBTN.classList.remove('keyboard__key__active')
          }else if (e.code === 'AltRight') {
            e.preventDefault()
            altL.classList.remove('keyboard__key__active')
          }
          else if (e.code === 'AltLeft') {
            altR.classList.remove('keyboard__key__active')
          }else if (e.key === 'ArrowDown' || e.key === 'ArrowUp' 
          || e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
            document.querySelector('#key-board .arrow[data-arrow = "'+e.key+'"]').classList.remove('keyboard__key__active')
            
            
          }
   }) 

// let btn = document.button
// console.log(document.button.length);
// btn.addEventListener('click', () => {
//         btn.classList.add('keyboard__key__active');
//     })

    // button.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         textArea.value += btn.innerText
    //         space = textArea.value.split('')
    //         btn.classList.add('keyboard__key__active')
            
    //         })
    
            
    // })


    backspace.addEventListener('click', () => {
        space.pop();
        textArea.value = space.join('')
    })

    del.addEventListener('click', () => {

        space.shift();
        textArea.value = space.join('')
    })
    
    spaceBTN.addEventListener('click', () => {
        space.push(' ')
        textArea.value = space.join('')
    })
    
    tab.addEventListener('click', () => {
        space.push('    ')
        textArea.value = space.join('')
            })
    
    caps.addEventListener('click', () => {
    button.forEach(btn => {
        btn.classList.toggle('keyboard__key__upper')
    })
    caps.classList.toggle('keyboard__key__active')
    })






































// let cot = ['keydown', 'keyup']
// cot.forEach(function(event){
//     window.addEventListener(event, (event)=>{
//         if (event.type == 'keydown') {
//             button.classList.add('keyboard__key__active')
//         } else if(event.type == 'keyup'){
//             button.classList.remove('keyboard__key__active')
//         }
//     })
// })





// keyBoard.addEventListener('keypress', getKeyPress)
// function getKeyPress (press) {
//     console.log(press.keyCode);
    
//     // keyBoard.querySelectorAll('keyboard__key[data="'+press.keyCode+'"]').classList.add('keyboard__key__active');
// document.querySelector('#key-board .keyboard__key[data="'+ press.keyCode +'"]').classList.add('keyboard__key__active');
// // document.querySelector('#key-board .keyboard__key__type-1[data="'+press.keyCode+'"]').classList.add('keyboard__key__active');
// // document.querySelector('#key-board .keyboard__key__type-2[data="'+press.keyCode+'"]').classList.add('keyboard__key__active');
// // document.querySelector('#key-board .keyboard__key__type-3[data="'+press.keyCode+'"]').classList.add('keyboard__key__active');
// }


// window.addEventListener('keydown', getKeyPress)

// function getKeyPress(press) {
//     for (let i = 0; i<=keyBoard.length;i++){
//         if (press.keyBoard === keyBoard[i].getAttribute('keyname') ||
//          press.keyBoard === keyBoard[i].getAttribute('lowerCaseName')){
//            document.querySelector('#key-board .keyboard__key[data="'+press.keyCode+'"]').classList.add('keyboard__key__active');
//          }
//     }
    
// }
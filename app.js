let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset-btn")
let newgame = document.querySelector(".new")
let mess = document.querySelector("#msg")
let count =0;

const showwinner = (winner)=>{
    mess.innerText=`Winner is ${winner}`
   
   for(box of boxes){
    box.disabled =true;
   }
    }

const resetb =() =>{
    turn = true;
    enableboxes();
    mess.innerText=""
count=0;
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
box.innerText=""
    }
}

let turn = true ;
const winner = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
]
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O"
            turn = false;
            
        }
        else{
            box.innerText="X"
            turn=true;
            
        }
        box.disabled = true;
        checkwinner();
        count++;
    });
});

const checkwinner =() => {
    for(let val of winner){
        let pos1 = boxes[val[0]].innerText
        let pos2 =boxes[val[1]].innerText
        let pos3 =boxes[val[2]].innerText
if(pos1 != ""&& pos2 !=="" &&pos3 !==""){
    if(pos1 === pos2 &&  pos2 === pos3)
showwinner(pos1);
    if (count === 8){
        mess.innerText="Draw";
    }
}}}
reset.addEventListener("click",resetb)
newgame.addEventListener("click",resetb)

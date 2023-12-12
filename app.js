const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector("#reset-btn")
let ternO = true

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
] 
        boxes.forEach((box) =>{
            box.addEventListener("click",() =>{
                if(ternO){
                    box.innerText ="O"
                    ternO = false

                }else{
                    box.innerText ="X"
                    ternO = true
                }
                box.disabled = true
            })

        })
        

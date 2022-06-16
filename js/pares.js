/*let b1 = document.getElementById(a1);

b1.addEventListener("click", img);

function img(){
    b1.classList.remove("white");
    b1.classList.add("ima");
}*/
const arr = [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let pos = 0 
///const aleatorio = (desde,hasta) => Math.round(Math.random()* (hasta - desde)+ desde)
for(let i = 1; i<=15;i++){
    let randm = Math.round(Math.random()*(2 - 1)+ 1)
    ///pos = randm(0,arr.length-1)
    document.getElementById(`a${i}`).addEventListener("click",()=>{
        document.getElementById(`a${i}`).style.backgroundImage=`url('img/b${randm}.png')`
        document.getElementById(`a${i}`).style.backgroundSize="cover"
    })
   // arr.splice(pos,0)
    //pos = aleatorio(0,arr.length-1)
    document.getElementById(`a${15+i}`).addEventListener("click",()=>{
        document.getElementById(`a${15+i}`).style.backgroundImage=`url('img/b${randm}.png')`
        document.getElementById(`a${15+i}`).style.backgroundSize="cover"
    })
   // arr.splice(pos,0)
}

//arr[i]

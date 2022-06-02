nombre = document.getElementById("nombre");
btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){
    alert(nombre.value + "Maria");
})

btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    alert("Pedro")
})

btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function(){
    alert("Duban")
})

btn4 = document.getElementById("btn4");
btn4.addEventListener("click",function(){
    alert("Margarita")
})

btn5 = document.getElementById("btn5");
btn5.addEventListener("click",function(){
    alert("Francia")
})

btn6 = document.getElementById("btn6");
btn6.addEventListener("click",function(){
    alert("Ximena")
})


/*nombre.addEventListener("keydown",function(){
    alert(nombre.value)
})*/

nombre.addEventListener("focus",function(){
    alert(nombre.value)
})  



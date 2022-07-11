console.log("connected")

c1 = document.querySelector("#c1");
c2 = document.querySelector("#c2");
c3 = document.querySelector("#c3");

c1.addEventListener('click', ()=>{
    alert("Namaste, I'm circle 1");
})

c2.addEventListener('click', ()=>{
    alert("Hello, I'm circle 2");
})

c3.addEventListener('click', ()=>{
    alert("Hii, I'm circle 3");
})
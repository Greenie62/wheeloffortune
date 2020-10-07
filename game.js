var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var wheel=document.querySelector(".wheel")


letters.split("").forEach(letter=>{
    let pTag=document.createElement("p");
    pTag.className="p-tag"
    pTag.innerText = letter;

    wheel.appendChild(pTag)

})


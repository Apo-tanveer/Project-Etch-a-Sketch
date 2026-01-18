function createBoxes(Pixels, Color){    

    let container = document.querySelector("#container");
    container.innerHTML="";

    for (let i = 0; i<Pixels*Pixels; i++){ 
        let box = document.createElement("div");
        box.class = "smallbox";
        box.style.border = "solid white 1px";
        box.style.width = 400/Pixels + "px";
        box.style.height = 400/Pixels + "px";
        box.style.boxSizing = "border-box";
        container.appendChild(box);
        boxChangeColor(Color);
        
    }
}



function getFieldValues(){
    let submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener("click", ()=>{
        let pixelInputField = document.querySelector("#pixelInputField");
        let colorInputField = document.querySelector("#colorInputField");
        createBoxes(pixelInputField.Value, colorInputField.Value );
    });
}

function boxChangeColor(Color){
    let isDrawing = false;
    document.body.addEventListener("mousedown", ()=>{
        isDrawing = true;
    })

    document.body.addEventListener("mouseup", ()=>{
        isDrawing = false;
    })

    if (isDrawing === true){
        box.style.boxChangeColor = Color;
    }else{
        box.style.boxChangeColor = "black";
    }
}
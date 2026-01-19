let container       = document.querySelector("#container");
let submitButton    = document.querySelector("#submitButton");
let clearButton     = document.querySelector("#clearButton");
let pixelInputField = document.querySelector("#pixelInputField");
let colorInputField = document.querySelector("#colorInputField");
let warningBox      = document.querySelector("#warning");
let eraser          = document.querySelector("#eraser");

let pixelValue      = 0;
let colorValue      = "";

// ------------------------------------------------------------

let isDrawing       = false;

document.body.addEventListener("mousedown", ()=>{
    isDrawing = true;
})

document.body.addEventListener("mouseup", ()=>{
    isDrawing = false;
})

// ---------------------------------------------------------------------------

submitButton.addEventListener("click", ()=>{
    pixelValue = pixelInputField.value;
    colorValue = colorInputField.value;
    createPixels(pixelValue, colorValue);
});


function createPixels (pixelValue, colorValue){
   container.innerHTML = "";
   warningBox.innerHTML = "";

    if(pixelValue<0 || pixelValue>100){
        
        let para = document.createElement("p");
        para.textContent = "Pixel value must be between 0-100";
        warningBox.appendChild(para);
    }
    else{
        for(let i=0 ; i<pixelValue*pixelValue ; i++){
            let pixel             = document.createElement("div");
            pixel.className       = "pixel";
            pixel.style.width     = 400/pixelValue + "px";
            pixel.style.height    = 400/pixelValue + "px";
            pixel.style.border    = "1px solid red";
            pixel.style.boxSizing = "border-box";

            container.appendChild(pixel);

//______________________________COLORING EACH BOX_________________________________________

            pixel.addEventListener("mouseover", ()=>{
                if(isDrawing){
                    pixel.style.backgroundColor= colorValue;
                }

            pixel.addEventListener("mousedown", ()=>{
                pixel.style.backgroundColor = colorValue;
            })

//_______________________________ERASER MODE______________________________________________

            eraser.addEventListener("click", ()=>{
                colorValue = "lightblue";
            })
// ______________________________ERASE EVERYTHING_________________________________________

            clearButton.addEventListener("click", ()=>{
                pixel.style.backgroundColor = "lightblue";
            })

            })
            
        }  
    } 
}



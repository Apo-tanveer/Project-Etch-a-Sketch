let container       = document.querySelector("#container");
let submitButton    = document.querySelector("#submitButton");
let clearButton     = document.querySelector("#clearButton");
let pixelInputField = document.querySelector("#pixelInputField");
let colorInputField = document.querySelector("#colorInputField");
let warningBox      = document.querySelector("#warning");

let pixelValue = 0;
let colorValue = "";

submitButton.addEventListener("click", ()=>{
    pixelValue = pixelInputField.value;
    colorValue = colorInputField.value;
    createPixels(pixelValue, colorValue);
});


function createPixels (pixelValue){
   container.innerHTML = "";
   warningBox.innerHTML = "";

    if(pixelValue<0 || pixelValue>100){
        
        let para = document.createElement("p");
        para.textContent = "Pixel value must be between 0-100";
        warningBox.appendChild(para);
    }
    else{
        for(let i=0 ; i<pixelValue*pixelValue ; i++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.width = 400/pixelValue + "px";
            pixel.style.height = 400/pixelValue + "px";
            pixel.style.borderColor = "solid red";
            pixel.style.boxSizing = "border-box";

            container.appendChild(pixel);
        }  
    } 
}
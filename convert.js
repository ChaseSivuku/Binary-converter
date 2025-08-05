const file = document.getElementById("file-transfer"); 
const temp = document.getElementById("temperature"); 
const sci = document.getElementById("scientific"); 
const metric = document.getElementById("metric"); 

function hideAll(){
    file.style.display = "none";
    temp.style.display = "none";
    sci.style.display = "none";
    metric.style.display = "none";
}

const fileBtn = document.getElementById("file-button");
fileBtn.addEventListener("click", function(){
    hideAll();
    file.style.display = "flex";
});

const tempBtn = document.getElementById("temp-button");
tempBtn.addEventListener("click", function(){
    hideAll();
    temp.style.display = "flex";
});

const sciBtn = document.getElementById("sci-button");
sciBtn.addEventListener("click", function(){
    hideAll();
    sci.style.display = "flex";
});

const metricBtn = document.getElementById("metric-button");
metricBtn.addEventListener("click", function(){
    hideAll();
    metric.style.display = "flex";
});


//File Transfer Calculation
function fileTransferTime(size, sizeUnit, intSpeed, intSpeedUnit){
    
    let bytes = 0;
    let bytesPS = 0;
    
    switch(sizeUnit){
        case "GB" : bytes = size * 1073741824;
        break;
        case "MB" : bytes = size * 1048576;
        break;
        case "KB" : bytes = size * 1024;
        break;
    }
    switch(intSpeedUnit){
        case "GBps" : bytesPS = intSpeed * 1073741824;
        break;
        case "MBps" : bytesPS = intSpeed * 1048576;
        break;
        case "KBps" : bytesPS = intSpeed * 1024;
        break;
    }

    return Math.floor(bytes / bytesPS);
}

console.log(fileTransferTime(100, "MB", 5, "MBps"));

function weatherConvert(value, unit){
    if(unit === "f"){
        return Math.floor(value - 32 * 5/9); 
    } else if(unit === "c"){
        return Math.floor(value * 9/5 + 32);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    hideAll();
    file.style.display = "flex";

    const calcButton = document.getElementById("calc-button");
    calcButton.addEventListener("click", function(){
        const size = parseInt(document.getElementById("file-size").value);
        const speed = parseInt(document.getElementById("internet-speed").value);
        const speedUnit = document.getElementById("speed-unit").value;
        const sizeUnit = document.getElementById("size-unit").value;

        const answer = document.getElementById("time-result");
        answer.textContent += fileTransferTime(size, sizeUnit, speed, speedUnit);
    });
    
    const weatherButton = document.getElementById("convert-weather-button");
    weatherButton.addEventListener("click", () =>{
        const value = parseInt(document.getElementById("temp-value").value);
        const unit = document.getElementById("temp-unit").value;

        const result = document.getElementById("weather-converted");
        result.textContent += weatherConvert(value, unit);
    });

    
});


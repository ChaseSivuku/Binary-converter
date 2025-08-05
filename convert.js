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
    
    switch(sizeUnit){
        case "GB" : 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    hideAll();
    file.style.display = "flex";
});


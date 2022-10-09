"use strict"

import data from "./data.json" assert {type: 'json'}

let chartBarContainer = document.querySelector(".chart__bar-container");
let values = []


data.forEach(e =>{
    values.push(e.amount);
    chartBarContainer.innerHTML += `        
        <div class="chart__bar">
            <div class="chart__bar--label">$${e.amount}</div>
            <div class="chart__bar--day">${e.day}</div>
        </div>`
});
const calculateHeight = (value =>{
    let maxPixel = 150;
    return (value*maxPixel)/maxValue
})  

let bars = document.querySelectorAll(".chart__bar")
bars = [...bars];
let maxValue = Math.max(...values)

bars.forEach(e =>{

    e.style.height = `${calculateHeight(e.childNodes[1].innerText.slice(1))}px`

    if (maxValue == parseFloat(e.childNodes[1].innerText.slice(1))) {
        e.style.backgroundColor = 'hsl(186, 34%, 60%)'
    }

    e.addEventListener('mouseover', event=>{
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "block";
    })
    e.addEventListener('mouseout', event=>{
        let actualElement = event.target.childNodes[1];
        actualElement.style.display = "none";
    })
})


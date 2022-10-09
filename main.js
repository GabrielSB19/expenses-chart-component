"use strict"

import data from "./data.json" assert {type: 'json'}

let chartBarContainer = document.querySelector(".chart__bar-container");

data.forEach(e =>{
    chartBarContainer.innerHTML += `        
        <div class="chart__bar">
            <div class="chart__bar--label">$${e.amount}</div>
            <div class="chart__bar--day">${e.day}</div>
        </div>`
});

let bars = document.querySelectorAll(".chart__bar")
bars = [...bars];

bars.forEach(e =>{
    e.addEventListener('mouseover', event=>{
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = "block";
    })
    e.addEventListener('mouseout', event=>{
        let actualElement = event.target.childNodes[1];
        actualElement.style.display = "none";
    })
})
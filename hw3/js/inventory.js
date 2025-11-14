"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inventoryForm");
    let itemNames = [];
    let itemCounts = [];
    let itemCosts = [];

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const itemName = document.getElementById("itemName").value.trim();
        const itemCount = document.getElementById("itemCount").value;
        const itemCost = document.getElementById("itemCost").value;

        itemNames.push(itemName);
        itemCounts.push(itemCount);
        itemCosts.push(itemCost);
        displayItems();
    });

    function reduceItem(i) {
        if (itemCounts[i] > 1) {
            itemCounts[i] -= 1;
            displayItems();
        } else {
            itemNames.splice(i,1);
            itemCounts.splice(i,1);
            itemCosts.splice(i,1);
            displayItems();
        }
    }

    function displayItems() {
        let itemList = document.getElementById("inventory");
        itemList.innerHTML = "Inventory List: ";
        for ( let i = 0; i < itemNames.length; i++) {
            let div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `
                <p>${itemNames[i]}</p>
                <p>Count: ${itemCounts[i]}</p>
                <p>${itemCosts[i]} ea</p>
            `

            let reduceButton = document.createElement("button");
            reduceButton.innerText = "Reduce";
            reduceButton.className = "reduce";
            reduceButton.addEventListener("click", () => reduceItem(i));

            div.appendChild(reduceButton);
            itemList.appendChild(div);
        }


        let total = document.createElement("div");
        let sum = 0.0;
        for ( let i = 0; i < itemCounts.length; i++) {
            sum += itemCounts[i] * itemCosts[i];
        }
        total.className = "total";
        total.innerHTML = `
            <p>Total Value: \$${sum.toFixed(2)}</p>
        `
        itemList.appendChild(total);
    }

});

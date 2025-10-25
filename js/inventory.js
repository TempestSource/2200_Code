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

    function displayItems() {
        let itemList = document.getElementById("inventory");
        itemList.innerHTML = "Inventory List: ";
        for ( let i = 0; i < itemNames.length; i++) {
            let div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `
                <p>${itemNames[i]}</p>
                <p>${itemCounts[i]}</p>
                <p>${itemCosts[i]}</p>
            `
            itemList.appendChild(div);
        }
    }
});
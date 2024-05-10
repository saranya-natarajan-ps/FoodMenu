"use strict";

const menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea", 
       "Coke", "Dr. Pepper", "Sprite"
     ],
     drinkVals : [
        "water","tea","swtea","coke","drpepper","sprite"
     ],
    entrees : [
       "Hamburger w/ Fries", 
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies", 
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw", 
       "Veggie Plate"
    ],
    entryVals : [
        "hambur","grchtots","grchiveg","chifristk","frshrmp","vegplat"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ],
    dessertVals : [
        "cheese","choco","snick"
    ]
 };

window.onload = init;

function init(){
    initCategory();
    displaySelectAny();
    const foodCategory = document.getElementById("foodCategory");
    foodCategory.onchange = displayItems;
    
}

function initCategory(){
    const foodCategory = document.getElementById("foodCategory");
    let categoryList = ["Drinks","Entrees","Desserts"];
    let categoryValue = ["Drink","Entry","Dessert"];
    for (let i = 0;i < categoryList.length;i++){
        let categoryOption = new Option(categoryList[i],categoryValue[i]);
        foodCategory.appendChild(categoryOption);
    }
    let noneOption = new Option("Select One Category","SEL")
    foodCategory.appendChild(noneOption)
    foodCategory.value = "SEL";
}

function displayItems(){ 
    const foodCategory = document.getElementById("foodCategory");
    let selectedValue = foodCategory.value;
    if (selectedValue == "SEL"){
        displaySelectAny();
    }
    else if (selectedValue == "Drink"){
        showDrinks();
    }
    else if (selectedValue == "Entry"){
        showEntrees();
    }
    else{
        showDesserts();
    }
}

function showDrinks() {
    const foodItems = document.getElementById("foodItems");
    while(foodItems.firstChild){
        foodItems.removeChild(foodItems.firstChild);
    }
    
    let emptyOption = new Option("Select one ...","SEL1")
    foodItems.appendChild(emptyOption);
    for (let j = 0;j < menu.drinks.length;j++){
        let drinkOption = new Option(menu.drinks[j],menu.drinkVals[j]);
        foodItems.appendChild(drinkOption);
    }
    foodItems.value = "SEL1";
}

function displaySelectAny(){
    const foodItems = document.getElementById("foodItems");
    while(foodItems.firstChild){
        foodItems.removeChild(foodItems.firstChild);
    }
    
    let emptyOption = new Option("Select One ...","SEL0")
    foodItems.appendChild(emptyOption);
    foodItems.value - "SEL0"
}

function showEntrees(){
    const foodItems = document.getElementById("foodItems");
    while(foodItems.firstChild){
        foodItems.removeChild(foodItems.firstChild);
    }
    let emptyOption = new Option("Select One ...","SEL2")
    foodItems.appendChild(emptyOption);
    for (let j = 0;j < menu.entrees.length;j++){
        let entryOption = new Option(menu.entrees[j],menu.entryVals[j]);
        foodItems.appendChild(entryOption);
    }
    foodItems.valuealue = "SEL2";
}

function showDesserts(){
    const foodItems = document.getElementById("foodItems");
    while(foodItems.firstChild){
        foodItems.removeChild(foodItems.firstChild);
    }
    
    let emptyOption = new Option("Select One ...","SEL3")
    foodItems.appendChild(emptyOption);
    for (let j = 0;j < menu.desserts.length;j++){
        let dessertOption = new Option(menu.desserts[j],menu.dessertVals[j]);
        foodItems.appendChild(dessertOption);
    }
    foodItems.value = "SEL3";
}
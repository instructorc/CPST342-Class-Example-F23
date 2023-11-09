
//Step 1 Sequence
var groceryFoodArray = ["Nuts", "Fish", "Lentils", "Whole Grains"];
outputItems();





//Step 2  Define a function
function outputItems(){
    var isInList = false;

    //Looping Structure  for loop, while loop
    for(var i = 0; i < groceryFoodArray.length; i++){

        //Decison 
        if(groceryFoodArray[i] == "Lentils"){
            isInList = true;
        }
        console.log(groceryFoodArray[i]);
    }

    //Decision Structure - if, if/else, switch, ternary
    if(isInList == true){
        console.log("YES - Lentils is in list");
    }else{
        console.log("Item is not in list");
    }

}


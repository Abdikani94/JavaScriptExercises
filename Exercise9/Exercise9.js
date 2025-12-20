

//Object Methods Exercise 9

let Car={
    make : "Hayundia",
    model : "BMW",
    Year : 2025,
    start : function(){
        console.log("The car has start now "+ this.Year)
    }
};

console.log(Car.start())
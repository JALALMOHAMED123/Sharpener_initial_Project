    function boilWater() {
    return new Promise((resolve)=>{
        setTimeout(function () {
            resolve("Water boiled");
           }, 2000);
    });
   }

   function addCoffeePowder() {
    return new Promise((resolve)=>{
        setTimeout(function () {
            resolve("Added coffee powder");
           }, 500);
        });
   
   }
   
   function brewCoffee() {
    return new Promise((resolve)=>{
        setTimeout(function () {
            resolve("Brewed coffee");
        }, 1000);
    });
   }
   
   function haveCoffee() {
    setTimeout(function () {
        console.log("Enjoying my coffee");
    }, 3000);
   
   }
   
   
   boilWater().then((result)=>{
    console.log(result);
    addCoffeePowder().then((result)=>{
        console.log(result);
        brewCoffee().then((result)=>{
            console.log(result);
            haveCoffee();
        });
    });
   });
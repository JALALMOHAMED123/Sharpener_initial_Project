function checkWeather() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            const checkweather=Math.random()>0.5;
            if(checkweather){
                resolve("Let us go for picnic");
            }
            else{
                reject("Error: It is cloudy");
            }
           }, 3000);
    });
   }

   checkWeather()
    .then((resolve)=>{
      console.log(resolve);
    })
    .catch((error)=>{
      console.log(error);
    })
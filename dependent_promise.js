function checkCar(){
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
      const checkcar=Math.random()>0.5;
      if(checkcar){
        resolve('Car is ready');
      }
      else{
        reject('Error: Car needs maintenance');
      }
    },2000);
    });
  } 
  function packForPicnic(){
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
      const packing=Math.random()>0.5;
      if(packing){
        resolve('Packed everything for picnic');
      }
      else{
        reject('Error: Not have some essentials');
      }
    },2000);
    });
  }  
  checkCar()
    .then((resolve)=>{
      console.log(resolve);
      return packForPicnic();
    })
    .then((resolve)=>{
        console.log(resolve);
        console.log("Go for picnic");
      })
    .catch((error)=>{
      console.log(error);
      console.log("Picnic cancelled");
    })
function concertPassPromise(){
    return new Promise((resolve,reject)=>{
      setTimeout(function(){
      const booksearch=Math.random()>0.5;
      if(booksearch){
        resolve('Pass received');
      }
      else{
        reject('Pass not received');
      }
    },3000);
    });
  }
  
  concertPassPromise()
    .then((resolve)=>{
      console.log(resolve);
    })
    .catch((error)=>{
      console.log(error);
    })
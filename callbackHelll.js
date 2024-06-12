
console.log("execution started");
function user (callback){
  setTimeout(()=>{
    const user = {name : "abhinav ", id : 1}
    return user
  },2000)
}



user()


console.log('execution ended');
async function postData() {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    // let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    // console.log(response)
    let data = await response.json()
    console.log(data.usd)
  }
  catch (err) {
    console.log(err)
  }
}
postData()


// //promise
// async function getUser(){
//   const prom = new Promise(function(resolve, reject) {
//     //call server
//     //prepare data
//   let users = [{ name: "saurabh" }, { name: "utpal" }]
//   let posts= [{}]

//   if (users.length > 0) {
//     resolve(users)
//   } else {
//     reject("Failed")
//   }
// })
//   return prom;
// }
// getUser()
// .then(function(users){
//  return getPostFromUser(users[0])
// }) //if success
//   .then(function (posts){
//     console.log(posts)
//   })
// .catch(function(error){
//   console.log(error)
// })//if reject


// // .then(function(users){
// //   // console.log(users)
// //   getPostFromUser(users[0])
// //   .then(function posts(){

// //   })
// //   .catch(function(error){
// //   console.log(error)
// // })
// // }) //if success
// // .catch(function(error){
// //   console.log(error)
// // })//if reject


// async function doSomething(){
//   return new Promise((resolve, reject){
//     if(true){
//       resolve("resolve")
//     }
//     else{
//       reject("failed")
//     }
//   })
// }
// doSomething()
// .then(function(data){
//   console.log(data)
// })
// .catch(function(error){
//   console.log(error)
// })

// console.log("Line 1")
// async function bigTask(){
//   return new Promise(function(resolve, reject){
//     let count=0;
// for(let i=0;i<10000000;i++){
//   count++;
// }
//  resolve(count)
//   })
// }
// bigTask()
// .then(function(count){
//   console.log(count)
// })

// console.log(bigTask())
// console.log("Line 3")

// https://jsonplaceholder.typicode.com/

//fetch 
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
//   // console.log(response)
//   return response.json()
// })
//   .then((data)=>{
//     console.log(data)
//   })
// .catch((error)=>{
//   console.log(error)
// })


//best way to handle promises
// async function postData(){
// let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   // console.log(response)
// let data = await response.json()
//    console.log(data)
// }
// postData()

//another best way to handle promises

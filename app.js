let signupform=document.getElementById('signupform')
// console.log(signupform);
signupform.addEventListener("submit",(event)=>{
  // console.log(event);
  let name=event.target.uname.value
  let phone=event.target.phone.value
  let email=event.target.email.value
  let pass=event.target.password.value
  console.log(name,phone,email,pass);

  let UserDetails=JSON.parse(localStorage.getItem("userData"))??[]
  // console.log(UserDetails)
  UserDetails.push({
    'name':name,
    'phone':phone,
    'email':email,
    'pass':pass
  })
  localStorage.setItem("userData",JSON.stringify(UserDetails))

  console.log(UserDetails)

  event.target.reset();
  event.preventDefault();
})



























































//   let UserDetails=JSON.parse(localStorage.getItem("userdata"))||[]
//   UserDetails.push({
//        'name':name,
//        'phone':phone,
//        'email':email,
//        'password':pass
//   })
// console.log(UserDetails)

//   localStorage.setItem("userdata",JSON.stringify(UserDetails))
  // event.target.reset()
//    console.log(name,phone,email,pass);
  
//    event.preventDefault();

// })




// let loginform=document.getElementById("loginform")
// if(loginform){

//   loginform.addEventListener("submit",(event)=>{
//     let loginemail=document.getElementById("loginemail").value
//     let loginpass=document.getElementById("loginpass").value

//     let UserDetails=JSON.parse(localStorage.getItem("userdata"))||[]
//     console.log(UserDetails);
    

  
//     event.target.reset();
//     event.preventDefault();
//   })
// }
   
        
    


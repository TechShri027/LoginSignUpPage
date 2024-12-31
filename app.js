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

let loginform=document.getElementById('loginform')
// console.log(loginform)
loginform.addEventListener("submit",(event)=>{
  // console.log(event)
  let loginemail=event.target.loginemail.value;
  let loginpass=event.target.loginpass.value;
  // console.log(loginemail,loginpass)

  event.preventDefault();
})




























































        
    


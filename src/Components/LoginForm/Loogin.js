const Users=[
    {
        id:1,
        email:'aftab@gmail.com', 
        Name:'Aftab'
    }
]
App.post("/Login",async(req,res)=>{
    const user=Users.find(u=>u.email ===req.body.email)
    console.log(user)
})
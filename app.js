const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require("mongoose")
const {v4:uuidv4}=require("uuid")
 

const port=8000


const mongurl="mongodb+srv://keerthigam2023it:seceit@node.fsql7.mongodb.net/et"
mongoose
  .connect(mongurl)
  .then(()=>{
    console.log("Db connected")
    app.listen(port,()=>{
        console.log("My server is running")
    })
  })

//   const expenseSchema=new mongoose.Schema({
//     id:{type:String ,required:true,unique:true},
//     title:{type:String,required:true},
//     amount:{type:Number,required:true},
// });


// const expenseModel=mongoose.model("expense-tracker",expenseSchema);//collection name,schema

// app.post("/api/expense",async(req,res)=>{
//     const{title,amount}=req.body;
//     const newExpense=new expenseModel({
//         id:uuidv4(),
//         title:title,
//         amount:amount,
//      });
//      const savedExpense=await newExpense.save();
//      res.status(200).json(savedExpense);
// });

// app.get("/api/expense/:amount", async (req, res) => {
//     const { amount } = req.params;
//     const expense = await expenseModel.findOne({ amount : amount }); 
//     res.json(expense)
//     //  console.log(req.params)
   
//   });
  
//   app.put("/api/expense/:title", async (req, res) => {
//     const{title}=req.params
//     const expense = await expenseModel.updateOne({title:title},{ $set:{amount : 500}}); 
//     res.json(expense)
    
   
//   });

//   app.delete("/api/expense/:id", async (req, res) => {
//     const{id}=req.params
//     const expense = await expenseModel.deleteOne({id:id}); 
//     res.json(expense)
    
   
//   });

const userSchema=new mongoose.Schema({
  username:{type:String,required:true,unique:true},
  password:{type:String,required:true},
});

const User=mongoose.model("User",userSchema);

module.exports=User;

// const expenseModel=mongoose.model("expens-tracker",expenseSchema);//collection name,schema

app.post("/sign",async(req,res)=>{
  const{username,password}=req.body;
  const newExpense=new User({
      // id:uuidv4(),
      // title:title,
      // amount:amount,
      username:username,
      password:password,
   });
   const savedExpense=await newExpense.save();
   res.status(200).json(savedExpense);
});
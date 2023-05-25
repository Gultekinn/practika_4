const express=require ("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

app.use(express.json())
app.use(cors())
PORT=7075
mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/").then((res)=>{
    console.log("connected..")
})

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
})
const modelSchema=mongoose.model("Users",(userSchema))

//get
app.get("/",async(req,res)=>{
    const data=await modelSchema.find()
    res.send(data)
})
//post
app.post("/",async(req,res)=>{
    const newModel= await new modelSchema({
        ...req.body
    })
    newModel.save()
    res.send(newModel)
})

//delete
app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const newModel=await modelSchema.findByIdAndDelete(id)
    res.send("delete")
})

//get bt id
app.get("/:id",async(req,res)=>{
    const{id}=req.params
    const target=await modelSchema.findById(id)
    res.send(target)
})



app.listen(PORT,(req,res)=>{
    console.log("...appenet listen")
})

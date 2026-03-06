const express = require("express")
const app = express();
const mongoose = require("mongoose")

app.use(express.json());

mongoose.connect("mongodb+srv://Deepak_Kumar:JkvaGHXh8axVREWE@cluster0.zzhvk5s.mongodb.net/?appName=Cluster0/server_assign")
    .then(() => console.log("MongoDB connected sucessfully"))
    .catch((error) => console.log("mongodb connection failed", error))

const userSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    city:String,
    membership:String
})
const User = mongoose.model("user", userSchema)

app.get("/", (req, res) => {
    res.send("server is working");
})

app.get("/users", async(req, res) => {
    const alluser =await User.find();
    res.status(200).json(alluser)
})

app.get("/user/:id", async(req, res) => {
    const id=Number(req.params.id);
    const userData = await User.findById(id)
    res.status(200).json(userData)

})

app.post('/adduser', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send("data created")
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    };
})

app.post('/addusers', async (req, res) => {
    try {
        const users= await User.insertMany(req.body); 
        res.send("data created")
    }
    catch (err) {
        res.status(400).json({ message: err.message }); 
    };
})

app.patch("/patch-user/:id", async (req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"user updated"})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})

app.put("/put-user/:id", async (req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({msg:"user updated"})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})

app.delete("/delete-user/:id", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(204).json({msg:"user delete"})
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})



app.listen(3000, () => {
    console.log("server 2 started on port 3000");

})
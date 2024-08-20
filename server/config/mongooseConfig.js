
import mongoose from "mongoose";


export const connectToMongoose = async()=>{

    try{
        await mongoose.connect("mongodb+srv://tkiranteja251:YWzHaEmzeHr9Bs7K@cluster0.jdtwc.mongodb.net/chatter-up"
            ,{useNewUrlParser: true, useUnifiedTopology: true}
        );

        console.log("Connected to mongoose");
    }catch(err){
        console.log(err);
        console.log("ERROR CONNECTING WITH MONGOOSE");
    }

}


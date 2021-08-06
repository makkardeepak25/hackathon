const mongoose=require("mongoose");
require("dotenv").config();
const connect = () => {
    
    return mongoose.connect(`mongodb+srv://packers123:${process.env.PASSWORD}@cluster0.3vfax.mongodb.net/${process.env.DATA_BASE_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        serverSelectionTimeoutMS: 5000,
    })
}

module.exports=connect;


import mongoose from "mongoose";

const ConnectDb = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/", {
    dbName : "studentAPI"
  }).then(()=> console.log("DB is Connected")).catch((err)=> console.log(err))
}

export default ConnectDb
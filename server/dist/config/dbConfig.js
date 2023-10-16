import mongoose from "mongoose";
const dbConnection = async (database_uri) => {
    try {
        await mongoose.connect(database_uri);
        console.log("DB connected");
    }
    catch (error) {
        console.log(error);
    }
};
export default dbConnection;

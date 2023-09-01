import mongoose, { connection } from "mongoose";

export const connect =async ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/tmdb")
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("mogodb connected successfully")
        })
        connection.on('error', (err) => {
            console.log(`error is coming ${err}`)
            process.exit()
        })
    } catch (error) {
        console.log(error)
    }
}
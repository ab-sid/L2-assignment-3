import mongoose from "mongoose";
import app from "./app";

let server;
const port = 5000

async function main() {
  try {
    await mongoose.connect('mongodb+srv://libraryDB:libraryDB@cluster0.fk0de.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0');
    console.log('db connected');
    server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  } catch (error) {
    console.log(error);
  }

  
}

main();
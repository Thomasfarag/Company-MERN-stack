

import mongoose from "mongoose";

export function connection() {
    mongoose
      .connect("mongodb://127.0.0.1:27017/test")
      .then(() => console.log("db connected"))
      .catch((err) => console.log("db err"));

}


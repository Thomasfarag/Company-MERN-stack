import { userModel } from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




export const signUp =async (req, res, next) => {
 try {
  let { name, email, password , address   } = req.body;
  let existUser = await userModel.findOne({ email });
  if (existUser) return res.json({message:"email already exist"})
  let hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALTROUNDS));
  let addedUser = await userModel.insertMany({ name, email, password: hashedPassword ,address});
  res.json({ message: "Success", addedUser });

 } catch (error) {
  res.json({message:"server internal error"})
console.log("error in signing up =>" ,error)  
 }};

 export const signIn = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let existUser = await userModel.findOne({ email });
    if (existUser) {
      let matched = bcrypt.compareSync(password, existUser.password);
      if (matched) {
        let token = jwt.sign({ id: existUser._id, role: existUser.role }, process.env.SECRET_KEY);
        res.json({ message: "Welcome", token });
      } else {
        res.json({ message: "Wrong password" });
      }
    } else {
      res.json({ message: "You have to register first" });
    }
  } catch (error) {
    res.json({ message: 'Server Internal Error' });
    console.log("Error in signin =>> ", error);
  }
}

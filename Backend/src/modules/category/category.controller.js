import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { categoryModel } from "../../../db/models/category.model.js";
import express from 'express';
const app = express()
app.use(express.json())

export const getAllServives = async (req , res , next )=>{
    try {
    let categories = await categoryModel.find()
    res.json({message:"Success" , categories})
    } catch (error) {
        res.json({message:"Cant get All services"})
        console.log(error)  
            }
}
export const getServiceById = async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "ID parameter is missing" });
      }
  
      const service = await categoryModel.findById(id);
  
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
  
      res.json({ message: "Success", service });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unable to get service" });
    }
  };

export const addService = async (req , res , next )=>{
    let {categoryName , categoryService} = req.body;
    try {
    let addedService =  await categoryModel.insertMany({categoryName , categoryService});
    res.json({message:"Success",addedService})
    } catch (error) {
        res.json({message:"Cant Add service"})
        console.log(error)  
    }
}

export const deleteService = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID parameter is missing" });
        }
        
        const deletedService = await categoryModel.findByIdAndDelete(id);
        
        if (!deletedService) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.json({ message: "Success", deletedService });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to delete service" });
    }
};

export const updateService = async (req , res , next )=>{
    const _id = req.params.id;

    let { categoryName , categoryService } = req.body;
    try {
    let sercive=  await categoryModel.findByIdAndUpdate({_id} , { categoryName , categoryService}, {new :true});
    if (!sercive) {
        return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service updated successfully", service: sercive });
} catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Server error" });
}}

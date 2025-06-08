import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"


const registerUser = AsyncHandler( async (req, res) => {
    console.log(req.body)
    const {fullName, email, username, password} =req.body
    // check if all fields are filled
    if([fullName, email, username, password].some((field) => field?.trim === "")) {
        throw new ApiError(400, "all fields are required")
    }
     
    const existedUser = await User.findOne({
        $or : [
            {username},
            {email}]
    })
    // validate if already exists
    // console.log(req.files.avatar[0])
    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
   
    const avatarLocalpath = req.files?.avatar[0]?.path;
    // console.log(avatarLocalpath)
    let coverImagePath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.len > 0) {
        coverImagePath = req.files.coverImage[0].path
    }
    if(!avatarLocalpath) {
        throw new ApiError(400, "Avatar file is required")
    }
    const avatar = await uploadOnCloudinary(avatarLocalpath)
    
    const coverImage = await uploadOnCloudinary(coverImagePath)
     console.log(avatar)
    const user = await User.create({
        fullName,
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase() 

    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
   if(!createdUser) {
    throw new ApiError(500, "Something went wrong while creating user")
   }

   return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered Successfully")
   )
} )

export {registerUser}
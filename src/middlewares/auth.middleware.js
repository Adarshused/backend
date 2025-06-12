import  jwt  from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";


export const verifyJWT = AsyncHandler(async (req, _ , next) => {
    try{
        const token = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer", "")
        if(!token) {
            throw new ApiError(401, "unauthorized request")
        }
        const decodedToken =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken._id).select("-password -refreshToken")

        req.user = user
        next()
    }
    catch (err) {
        throw new ApiError(401, err?.message || "Invalid access token")
    }
})
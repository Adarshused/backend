import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const userSchema = new Schema(
    {
    username: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,

    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String,
        require: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video" 
    },
    password: {
            type: String,
            required: [true, 'password is required']
    },
    refreshToken: {
        type: String,
    },
    },
    {

        timestamps: true, // it will save the created and updated time automatically
    }
)
   // pass encryption logic
    userSchema.pre("save",async function (next) {
      if(!this.isModified("password")) return next();
      
       this.password = await bcrypt.hash(this.password, 10);
       next();
    })

    userSchema.methods.isPasswordCorrect = async function (pass) {
              return await bcrypt.compare(pass,this.password);
    }

    // auth logic

    userSchema.methods.generateAccessToken = function () {
        return jwt.sign(
            {
                _id : this._id, // comes from mongodb
                email : this.email,
                username : this.username,
                fullname : this.fullname
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    }

    userSchema.methods.generateRefreshToken = function () { 
        return jwt.sign(
            {
                _id : this._id, // comes from mongodb
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_EXPIRY
            }
        )
    }

export const User = mongoose.model("User",userSchema)
    

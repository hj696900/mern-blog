import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({              //Schema means rukes or conditions
            username: {
                type : String,
                required : true,
                unique : true,
            },
            email : {
                type : String,
                required : true,
                unique : true,
            },
            password : {
                type : String,
                required : true,
            }
        }, {timestamps: true}   //we want to save two things while we are adding a new user using timestamp->the time of creation and the time of update
);

const User = mongoose.model('User', userSchema);

export default User;
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
const Accountservice = require("../services/account.service");

exports.login = async (req, res, next) =>{
    try{
        const accountservice = new Accountservice(MongoDB.client);
        const document = await accountservice.login(req.body);
        if(!document){
            return next(new ApiError(404, "Login faild"));
        }else
        return res.send({messages: "Login complete"});
    }catch(error){
        return next(
            new ApiError(500, `error`)
        );
    }
}

exports.register = async(req, res, next)=>{    
    try{
        const accountservice = new Accountservice(MongoDB.client);
        const document = await accountservice.register(req.body);
        return res.send({messages: "Register Complete"});
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while createting the account")
        );
    }
    
}

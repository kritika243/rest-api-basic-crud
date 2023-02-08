import Joi from "joi"

const registerController={
  register(req, res, next){


    // validations
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{3,30}$')).required(),
      confirm_password: Joi.ref('password')
    })

    const {error} = registerSchema.validate(req.body)

    if(error){
      //  passing error to the middleware using next
      return next(error)
    }


    res.json({message: "User has been registered"})
  }
}



export default registerController
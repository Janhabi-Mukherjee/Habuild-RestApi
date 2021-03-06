//generateToken 
const jwt=require('jsonwebtoken');

const generateJwtTokens=(email,password)=>{
   
    const user={email,password};
    const accessToken= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn :'3d'})
    return({accessToken});
}

exports.module=generateJwtTokens;

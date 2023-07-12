import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

const generateJWT = (payload:object) => {
    const JWT = jwt.sign(payload, process.env.JWT_SECRET as Secret, { expiresIn: "1h" })
    return JWT;
}

const verifyToken = (token:string)=>{
    try
    {
    jwt.verify(token,process.env.JWT_SECRET as Secret);
    }
    catch(error)
    {
        console.log("the token is unauthorized")
        throw error;
    }
}

export default {
    generateJWT,
    verifyToken
}
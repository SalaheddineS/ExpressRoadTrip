import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Role } from '@prisma/client';
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

const getRoles = (token:string) => {
    const decoded = jwt.decode(token) as JwtPayload;
    const roles = decoded.roles;
    return roles;
}

const getRole = (token:string,roleName:string) => {
    const roles = getRoles(token);
    const role = roles.find((role:Role)=>role.name===roleName);
    if(!role) throw new Error("Role not found");
    return true;
}

export default {
    generateJWT,
    verifyToken,
    getRole
}
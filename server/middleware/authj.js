//Postman config
// if(pm.response.code === 201){
//     pm.environment.set("token",pm.response.json().token)
// }


//auth middleware

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== undefined) {

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, process.env.THE_KEY, (error, data) => {
            if (error) {
                throw new Error("Authentication failed");
            } else {
                req.user = data;
            }
        });
        next();

    } else {
        res.status(403).send("Auth failed")
    }
}

export default auth;
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function authentication(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.header("Authorization");

    if (!authorization) {
      return res.status(401).send("Authorization header missing");
    }

    const token = authorization.split(" ")[1];
    
    // Explicitly define the payload type to satisfy TypeScript
    const data = jwt.verify(token, "lkasjdflkjlkasdfhhnkwenhranf") as JwtPayload;
    
    console.log(data);
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
}
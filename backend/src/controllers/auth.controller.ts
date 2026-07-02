import { Request, Response } from 'express';
import { prisma } from '../db/client.js'
import { generateToken } from '../utils/tokenGeneration.js';
import bcrypt from 'bcryptjs';

export const register = async (req: Request, res: Response) => {
    const data = req.body;
    const currentUser = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })
    if (currentUser) {
        return res.status(400).send("User already available with this email")
    }
    const user = await prisma.user.create(
        {
            data: {
                name: data.name,
                email: data.email,
                password: await bcrypt.hash(data.password, 10),
                role: data.role
            }
        }
    );
    const { accessToken, refreshToken } = generateToken(user.id, user.role as "ADMIN" | "STAFF" | "STUDENT")

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            refresh_token: await bcrypt.hash(refreshToken, 10),
        }
    })
    res.status(201).json(accessToken);
};

export const login = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({ where: { email: req.body.email } });

    if (!user) {
        return res.status(404).send("User not available")
    }

    const { accessToken, refreshToken } = generateToken(user.id, user.role as "ADMIN" | "STAFF" | "STUDENT")

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            refresh_token: await bcrypt.hash(refreshToken, 10),
        }
    })




    res.status(200).send(accessToken);
};
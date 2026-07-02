import { Request, Response } from 'express';
import { prisma } from '../db/client.js' // Imports the bridge

export const createStudent = async (req: Request, res: Response) => {
    const student = await prisma.student.create({ data: req.body });
    res.status(201).json(student);
};

export const getStudents = async (req: Request, res: Response) => {
    res.json(await prisma.student.findMany());
};
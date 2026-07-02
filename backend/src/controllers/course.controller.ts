import { Request, Response } from 'express';
import { prisma } from '../db/client.js'

export const getCourses = async (req: Request, res: Response) => {
    res.json(await prisma.course.findMany());
};

export const createCourse = async (req: Request, res: Response) => {
    res.json(await prisma.course.create({ data: req.body }));
};

export const getCourseId = async (req: Request, res: Response) => {
    res.json(await prisma.course.findUnique({ where: { id: req.params.id as string } }));
};
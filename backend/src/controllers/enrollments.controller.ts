import { Request, Response } from 'express';
import { prisma } from '../db/client.js'
export const createEnrollment = async (req: Request, res: Response) => {
    // req.body should contain studentId and courseId
    const enrollment = await prisma.enrollment.create({ data: req.body });
    res.status(201).json(enrollment);
};

export const getEnrollments = async (req: Request, res: Response) => {
    // Includes details about the student and course joined together
    res.json(await prisma.enrollment.findMany({
        include: { student: true, course: true }
    }));
};
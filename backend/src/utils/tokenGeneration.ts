import jwt from 'jsonwebtoken'
export const generateToken = (id: string, role: "ADMIN" | "STAFF" | "STUDENT") => {
    if (!process.env.ACCESS_SECRET) {
        throw new Error("Setup ENV with Variable ACCESS_SECRET");
    }
    const access_token = jwt.sign(
        {
            id: id,
            role: role
        },
        process.env.ACCESS_SECRET,
        {
            expiresIn: "15m"
        }
    )
    const refresh_token = jwt.sign(
        {
            id: id,
            role: role
        },
        process.env.ACCESS_SECRET,
        {
            expiresIn: "30d"
        }
    )
    return { access_token, refresh_token }
}
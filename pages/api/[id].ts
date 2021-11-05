import { NextApiRequest, NextApiResponse } from "next"
// import path from "path"

const api = (req: NextApiRequest, res: NextApiResponse) => {
    const userId = req.query.id as string
    res.status(200).json({ userId: userId })
}

export default api

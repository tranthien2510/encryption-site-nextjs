import fs from 'fs'
import type {NextApiResponse} from 'next'
import type {NextApiRequestWithFiles} from '../../middleware'
import middleware from '../../middleware'
import {encrypt} from '../../lib'
import nextConnect from 'next-connect'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (
    req: NextApiRequestWithFiles,
    res: NextApiResponse<Buffer>
) => {
    const file = req.files['file'][0];

    res.setHeader('Content-Type', file.headers['content-type'])
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'encrypted-' + file.originalFilename)
    res.send(encrypt(fs.readFileSync(file.path)))
});

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler

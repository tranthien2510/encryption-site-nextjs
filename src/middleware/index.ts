import nextConnect from 'next-connect'
import multiparty from 'multiparty'
import {NextApiRequest, NextApiResponse} from 'next'

const middleware = nextConnect()

export type NextApiRequestWithFiles = NextApiRequest & {
    files: Files
};

type File = {
    fileName: string,
    originalFilename: string,
    path: string,
    headers: {
        'content-type': string,
        'content-disposition': string
    },
    size: Number
}

type Files = {
    [key: string]: File[]
}

middleware.use((req: NextApiRequestWithFiles, res: NextApiResponse, next) => {
    const form = new multiparty.Form()

    form.parse(req, function (err, fields, files: Files) {
        req.body = fields
        req.files = files
        next()
    });
});

export default middleware

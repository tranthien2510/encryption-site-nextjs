import crypto from 'crypto';

const algorithm = 'aes-256-ctr';

const secret = 'pNf2HexvKz25Nt3V9n4xDJjaA8wxvKPa';

const key = crypto.createHash('sha256').update(secret).digest('base64').substr(0, 32)

export const encrypt = (buf: Buffer): Buffer => {
    const iv = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    const result = Buffer.concat([iv, cipher.update(buf), cipher.final()]);

    return result;
}

export const decrypt = (buf: Buffer): Buffer => {
    const iv = buf.slice(0, 16);

    const encrypted = buf.slice(16);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);

    return result;
}

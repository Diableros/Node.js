import * as fs from 'node:fs'
import * as path from 'node:path'
import * as url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const filePath = path.join(__dirname, '../data/users.json')

export const getUsers = () => fs.readFileSync(filePath)

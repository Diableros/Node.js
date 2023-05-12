import * as http from 'node:http'
import { getUsers } from './getUsers.js'

const BASE_URL = 'http://127.0.0.1'
const PORT = 3003

export const server = http.createServer((request, response) => {
  if (request.url) {
    const url = new URL(request.url, BASE_URL)

    if (url.searchParams.has('hello')) {
      const helloParam = url.searchParams.get('hello')

      if (helloParam?.length === 0) {
        response.statusCode = 400
        response.statusMessage = 'Bad Request'
        response.setHeader('content-Type', 'text/plain')
        response.write('Enter the name')
        response.end()
        return
      }

      response.statusCode = 200
      response.statusMessage = 'OK'
      response.setHeader('content-Type', 'text/plain')
      response.write(`Hello, ${helloParam}`)
      response.end()
      return
    }

    if (url.searchParams.has('users')) {
      response.statusCode = 200
      response.statusMessage = 'OK'
      response.setHeader('content-Type', 'application/json')
      response.write(getUsers())
      response.end()

      return
    }

    if (url.search.length > 0) {
      response.statusCode = 500
      response.end()

      return
    } else {
      response.statusCode = 200
      response.statusMessage = 'OK'
      response.setHeader('content-Type', 'text/plain')
      response.write('Hello, world!')
      response.end()
    }
  }
})

export const startServer = (url?: string, port?: string) => {
  if (url && port)
    server.listen(Number(port), () =>
      console.log(`Server was started on ${url}:${port}`),
    )
}

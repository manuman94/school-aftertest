import express from 'express'

import router from './routes'

const server = express()
require('dotenv').config()

server.use(express.json())
server.use(router)

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
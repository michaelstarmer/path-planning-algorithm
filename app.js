const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = 8000
connect()
    .use(serveStatic(__dirname))
    .listen(PORT, () => console.log(`Server running on ${PORT}`))
const server =  require('./server');
const port = 3030;
const cors = require('cors');
server.use(cors())

const apiRoutes = require('./api/apiRoutes');

server.use('/api',apiRoutes);

server.listen(port, () => {
    console.log(`Server is going on port ${port}`);
})
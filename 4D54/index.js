const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productsRouter = require('./routes/products');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  console.log('System Info:');
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU Cores: ${os.cpus().length}`);
});

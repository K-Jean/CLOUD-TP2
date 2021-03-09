const express = require('express');
const controllers = require('./api');
const config = require('./config/config');

async function startServer() {
    const app = express();
    
    await require('./loaders')(app);
  
    app.listen(config.port, err => {
      if (err) {
        Logger.error(err);
        process.exit(1);
        return;
      }
      console.log(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️ 
        ################################################
      `);
    });
  }
  
  startServer();
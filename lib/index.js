require('dotenv').config();

const { logger } = require('loggery');
const cluster = require('cluster');
const os = require('os');
const createApp = require('./createApp');

const PORT = process.env.PORT || 5001;

async function main() {
  try {
    if (cluster.isMaster) {
      const numOfCPUs = os.cpus().length;

      for (let i = 0; i < numOfCPUs; i++) { // eslint-disable-line
        cluster.fork();
      }

      // handle process failure
      cluster.on('exit', () => {
        console.log('A worker process died. Restarting...');
        cluster.fork();
      });
    } else {
      const app = await createApp();

      app.listen(PORT, async () => {
        logger().info(`Server running on port ${PORT}`);
      });
    }
  } catch (error) {
    logger().error(error);
  }
}

module.exports = main();

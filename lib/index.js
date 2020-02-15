require('dotenv').config();

const { logger } = require('loggery');
const createApp = require('./createApp');

const PORT = process.env.PORT || 5001;

async function main() {
  try {
    const app = await createApp();

    app.listen(PORT, async () => {
      logger().info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    logger().error(error);
  }
}

module.exports = main();

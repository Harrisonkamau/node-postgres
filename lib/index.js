require('dotenv').config();

const createApp = require('./createApp');

const PORT = process.env.PORT || 5001;

async function main() {
  try {
    const app = await createApp();

    app.listen(PORT, async () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = main();

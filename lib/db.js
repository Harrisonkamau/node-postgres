const { logger } = require('loggery');

const { NODE_ENV } = process.env;
const _getTablesQuery = `SELECT TABLE_NAME FROM information_schema.tables
  WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE';`;

class Postgres {
  constructor(db) {
    this.sequelize = db.sequelize;
  }

  static async connect(db) {
    try {
      const pg = new this(db);
      await pg.sequelize.authenticate();
      logger().info(`Successfully connected to ${NODE_ENV} PostgreSQL DB`);
    } catch (error) {
      logger().info('There was an error while connecting to PostgreSQL');
      logger().error(error);
    }
  }

  static async disconnect(db) {
    const pg = new this(db);
    await pg.sequelize.close();
  }

  static async getAllTables(db) {
    const pg = new this(db);
    logger().info('retrieving all tables');
    return pg.sequelize.query(_getTablesQuery);
  }
}

module.exports = Postgres;

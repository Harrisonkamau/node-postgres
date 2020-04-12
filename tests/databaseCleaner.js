const { logger } = require('loggery');
const Postgres = require('../lib/db');

class DatabaseCleaner {
  /**
   * Clean database after tests
   * Pass the name of the table to skip (during deletion)
   * @param {Array} options
   * @param {DB Connection Object} db
   */
  static async clean(db, options = {}) {
    logger().info('Cleaning DB');
    // truncate tables instead of running a DELETE which will be slower
    const [, tables] = await Postgres.getAllTables(db);
    const toDelete = this._removeSkipped(
      tables.rows,
      'table_name',
      options.skipTables,
    );

    let truncateMultiple = toDelete.reduce((result, table) => `${result}"${table}", `, '');
    truncateMultiple = truncateMultiple.slice(0, -2);

    return this._truncateTables(db, truncateMultiple);
  }

  static _truncateTables(db, truncateMultiple) {
    const q = `TRUNCATE ${truncateMultiple} RESTART IDENTITY CASCADE`;

    return db.sequelize.query(q);
  }

  static _removeSkipped(list, key, skipped = []) {
    return list.reduce((res, el) => {
      if (!skipped.includes(el[key])) {
        res.push(el[key]);
      }

      return res;
    }, []);
  }
}

module.exports = DatabaseCleaner;

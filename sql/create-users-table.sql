-- psql -h localhost -d node-sequel_development -q -f sql/create-users-table.sql
CREATE TABLE users(
  firstName text,
  lastName text,
  email text,
  password text
)

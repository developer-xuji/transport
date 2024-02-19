import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Account, Container, User, Truck } from './entities/index';

// const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: 'pgm-gs50u48khm3bwqe1yo.pgsql.singapore.rds.aliyuncs.com',
//   port: 5432,
//   username: 'tieyi_admin',
//   password: 'a!t7UBRkyCT!-bS',
//   database: 'transport',
//   synchronize: true,
//   logging: true,
//   entities: [Account, User, Container],
//   migrations: [],
//   subscribers: [],
// });
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'transport',
  synchronize: true,
  logging: true,
  entities: [Account, User, Container, Truck],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
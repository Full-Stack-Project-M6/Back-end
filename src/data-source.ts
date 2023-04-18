import 'dotenv/config';
import 'reflect-metadata';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Adress} from './entities/adress';
import { Announce } from './entities/announce';
import { Brand } from './entities/brand';
import { Color } from './entities/color';
import { Comment } from './entities/comment';
import { Fuel } from './entities/fuel';
import { Image } from './entities/images';
import { Model } from './entities/model';
import { User } from './entities/user';
import { Year } from './entities/year';
import { Initial1681742408167 } from './migrations/1681742408167-initial';


const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [Adress,Announce,Brand,Color,Comment,Fuel,Image,Model,User,Year],
    };
  }

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: false,
    entities: [Adress,Announce,Brand,Color,Comment,Fuel,Image,Model,User,Year],
    migrations: [Initial1681742408167],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig())
import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { Adress } from "./entities/adress";
import { Announce } from "./entities/announce";
import { Brand } from "./entities/brand";
import { Color } from "./entities/color";
import { Fuel } from "./entities/fuel";
import { Image } from "./entities/images";
import { Model } from "./entities/model";
import { User } from "./entities/user";
import { Year } from "./entities/year";
import { Comment } from "./entities/comment";
import { migrationsUser1681942201070 } from "./migrations/1681942201070-migrationsUser";
import { Initial1681742408167 } from './migrations/1681742408167-initial';


const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;
  console.log(dbUrl);
  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [
        Adress,
        Announce,
        Brand,
        Color,
        Comment,
        Fuel,
        Image,
        Model,
        User,
        Year,
      ],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: false,
    entities: [
      Adress,
      Announce,
      Brand,
      Color,
      Comment,
      Fuel,
      Image,
      Model,
      User,
      Year,
    ],
    migrations: [migrationsUser1681942201070,Initial1681742408167],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());

import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { Address } from "./entities/address";
import { Announce } from "./entities/announce";
import { Brand } from "./entities/brand";
import { Color } from "./entities/color";
import { Fuel } from "./entities/fuel";
import { Image } from "./entities/images";
import { Model } from "./entities/model";
import { User } from "./entities/user";
import { Year } from "./entities/year";
import { Comment } from "./entities/comment";
import { Initial1683053495798 } from "./migrations/1683053495798-Initial";

const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [
        Address,
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
      Address,
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
    migrations: [Initial1683053495798],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());

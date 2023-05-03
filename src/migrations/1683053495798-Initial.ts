import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683053495798 implements MigrationInterface {
    name = 'Initial1683053495798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "colors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "color" character varying(50) NOT NULL, CONSTRAINT "PK_3a62edc12d29307872ab1777ced" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fuels" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fuel" character varying(50) NOT NULL, CONSTRAINT "PK_4e8a7eac61d58da2fbb4b8743e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "years" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" character varying(50) NOT NULL, CONSTRAINT "PK_d6fe7de297533f142df4cb749ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image1" character varying NOT NULL, "image2" character varying NOT NULL, "image3" character varying NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying(50) NOT NULL, CONSTRAINT "PK_d6df271bba301d5cc79462912a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "kilometer" character varying(50) NOT NULL, "price_FIPE" character varying(50) NOT NULL, "price" character varying(50) NOT NULL, "description" character varying(50) NOT NULL, "image_cover" character varying NOT NULL, "published" boolean NOT NULL DEFAULT true, "tag" boolean NOT NULL DEFAULT false, "userId" uuid, "brandId" uuid, "colorId" uuid, "yearId" uuid, "modelId" uuid, "fuelId" uuid, "imageId" uuid, CONSTRAINT "REL_8d1f89f22698c85df1fc2da054" UNIQUE ("imageId"), CONSTRAINT "PK_9d7389225221375f560773aa115" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(200) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "announceId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "cpf" character varying(14) NOT NULL, "cellphone" character varying(15) NOT NULL, "date_birth" character varying(10) NOT NULL, "description" character varying(100) NOT NULL, "account_type" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "isActive" boolean DEFAULT true, "deletedAt" TIMESTAMP, "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(50) NOT NULL, "estate" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "street" character varying(50) NOT NULL, "number" character varying(50) NOT NULL, "complement" character varying(50) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_967f35a377367271b6f9ffc47c6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_bfa5b8ca38c10fe48e8fec0a273" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_26e0d8259ce2121ffc3c3f2f6fd" FOREIGN KEY ("colorId") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_df666a74f8e35abf7a9de13275d" FOREIGN KEY ("yearId") REFERENCES "years"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_358b655472945c81f99dea3ebf5" FOREIGN KEY ("modelId") REFERENCES "model"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_02cb66536bdbea7bcc74c34cfc0" FOREIGN KEY ("fuelId") REFERENCES "fuels"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announces" ADD CONSTRAINT "FK_8d1f89f22698c85df1fc2da054d" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_a28929c53cded59cce0ca5648b1" FOREIGN KEY ("announceId") REFERENCES "announces"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_a28929c53cded59cce0ca5648b1"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_8d1f89f22698c85df1fc2da054d"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_02cb66536bdbea7bcc74c34cfc0"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_358b655472945c81f99dea3ebf5"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_df666a74f8e35abf7a9de13275d"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_26e0d8259ce2121ffc3c3f2f6fd"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_bfa5b8ca38c10fe48e8fec0a273"`);
        await queryRunner.query(`ALTER TABLE "announces" DROP CONSTRAINT "FK_967f35a377367271b6f9ffc47c6"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "announces"`);
        await queryRunner.query(`DROP TABLE "model"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "years"`);
        await queryRunner.query(`DROP TABLE "fuels"`);
        await queryRunner.query(`DROP TABLE "colors"`);
        await queryRunner.query(`DROP TABLE "brands"`);
    }

}

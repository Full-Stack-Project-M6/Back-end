import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationsUser1681942201070 implements MigrationInterface {
    name = 'migrationsUser1681942201070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_birth"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "date_birth" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_birth"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "date_birth" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}

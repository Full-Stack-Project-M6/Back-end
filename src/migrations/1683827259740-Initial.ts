import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683827259740 implements MigrationInterface {
    name = 'Initial1683827259740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announces" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "announces" ADD "description" character varying(300) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(200) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announces" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "announces" ADD "description" character varying(50) NOT NULL`);
    }

}

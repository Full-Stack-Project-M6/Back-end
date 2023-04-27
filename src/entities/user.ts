import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
  DeleteDateColumn,
} from "typeorm";
import { Adress } from "./adress";
import { Comment } from "./comment";
import { Announce } from "./announce";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  cpf: string;

  @Column({ length: 15, unique: true })
  cellphone: string;

  @Column({ length: 10, nullable: false })
  date_birth: string;

  @Column({ length: 100 })
  description: string;

  @Column({ default: false })
  account_type: boolean;

  @Column({ length: 120 })
  password: string;

  @Column({ nullable: true, default: true })
  isActive: boolean;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToOne(() => Adress)
  @JoinColumn()
  address: Adress;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Announce, (announce) => announce.user)
  announce: Announce[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };

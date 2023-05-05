import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm";
import { Address } from "./address";
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

  @Column({ nullable: true, default: " " })
  reset_token: string;

  @Column({ default: false })
  account_type: boolean;

  @Column({ length: 120 })
  password: string;

  @Column({ nullable: true, default: true })
  isActive: boolean;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne(() => Address, (address) => address.user, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Announce, (announce) => announce.user)
  announce: Announce[];
}

export { User };

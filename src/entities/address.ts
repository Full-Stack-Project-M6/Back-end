import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from "typeorm";
import { User } from "./user";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  cep: string;

  @Column({ length: 50 })
  estate: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  street: string;

  @Column({ length: 50 })
  number: string;

  @Column({ length: 50 })
  complement: string;

  @OneToMany(() => User, (user) => user.address)
  @JoinTable()
  user: User;
}

export { Address };

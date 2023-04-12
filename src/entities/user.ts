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

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 15, unique: true })
  cellphone: string;
  
  @CreateDateColumn()
  date_birth: Date;

  @Column({ length: 100})
  description: string;

  @Column({ length: 15, unique: true })
  account_type: string;

  @Column({ length: 120 })
  password: string;
  
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
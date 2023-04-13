import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
  ManyToMany,
  OneToOne,
} from "typeorm";
import { Announce } from "./announce";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({  })
  Imagem1: string;
  @Column({  })
  Imagem2: string;
  @Column({  })
  Imagem3: string;

  @OneToOne(() => Announce, (announces) => announces.image)
  announce: Announce;
}

export { Image };

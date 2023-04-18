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
  image1: string;
  @Column({  })
  image2: string;
  @Column({  })
  image3: string;

  @OneToOne(() => Announce, (announces) => announces.image)
  announce: Announce;
}

export { Image };

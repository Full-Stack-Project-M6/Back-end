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
  JoinColumn,
} from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";
import { Brand } from "./brand";
import { Color } from "./color";
import { Fuel } from "./fuel";
import { Year } from "./year";
import { Image } from "./images";
import { Model } from "./model";
import { join } from "path";
@Entity("announces")
class Announce {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Comment, (comments) => comments.announce)
  comments: Comment[];

  @ManyToOne(() => User, (user) => user.announce, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: User;

  @ManyToOne(() => Brand, (brand) => brand.announce, {
    cascade: true,
    onDelete: "CASCADE",
  })
  brand: Brand;

  @ManyToOne(() => Color, (color) => color.announce, {
    cascade: true,
    onDelete: "CASCADE",
  })
  color: Color;

  @ManyToOne(() => Year, (year) => year.announce, {
    cascade: true,
    onDelete: "CASCADE",
  })
  year: Year;

  @ManyToOne(() => Model, (model) => model.announce, {
    cascade: true,
    onDelete: "CASCADE",
  })
  model: Model;

  @ManyToOne(() => Fuel, (fuel) => fuel.announce, {
    cascade: true,
    onDelete: "CASCADE",
  })
  fuel: Fuel;

  @Column({ length: 50 })
  kilometer: string;

  @Column({ length: 50 })
  price_FIPE: string;

  @Column({ length: 50 })
  price: string;

  @Column({ length: 50 })
  description: string;

  @Column()
  image_cover: string;

  @Column({default:true})
  published: boolean;
  
  @Column({default:false})
  tag: boolean;

  @OneToOne(() => Image, (image) => image.announce)
  @JoinColumn()
  image: Image;
}

export { Announce };

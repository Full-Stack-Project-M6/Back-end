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
import { Comment } from "./comment";
import { Brand } from "./brand";
import { Color } from "./color";
import { Fuel } from "./fuel";
import { Year } from "./year";
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

    @ManyToOne(() => Fuel, (fuel) => fuel.announce, {
      cascade: true,
      onDelete: "CASCADE",
    })
    fuel: Fuel;
    
  }
  
  export { Announce };
  
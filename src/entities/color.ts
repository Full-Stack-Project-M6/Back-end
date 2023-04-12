import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinTable,
    OneToMany
  } from "typeorm";
import { Announce } from "./announce";

  
  
  @Entity("colors")
  class Color {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
   @Column({ length: 50,})
    color: string;
   
   @OneToMany(() => Announce, (announces) => announces.color)
    announce: Announce[];

    }
  
  export { Color };
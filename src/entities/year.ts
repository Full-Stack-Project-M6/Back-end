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

  
  
  @Entity("years")
  class Year {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
   @Column({ length: 50,})
    color: string;
   
   @OneToMany(() => Announce, (announces) => announces.year)
    announce: Announce[];

    }
  
  export { Year };
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

  
  
  @Entity("model")
  class Model {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
   @Column({ length: 50,})
    model: string;
   
   @OneToMany(() => Announce, (announces) => announces.model)
    announce: Announce[];

    }
  
  export { Model };
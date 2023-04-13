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

  
  
  @Entity("fuels")
  class Fuel {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
   @Column({ length: 50,})
    fuel: string;
   
   @OneToMany(() => Announce, (announces) => announces.fuel)
    announce: Announce[];

    }
  
  export { Fuel };
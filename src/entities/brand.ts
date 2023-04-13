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

  
  
  @Entity("brands")
  class Brand {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
   @Column({ length: 50,})
    brand: string;
   
   @OneToMany(() => Announce, (announces) => announces.brand)
    announce: Announce[];

    }
  
  export { Brand };
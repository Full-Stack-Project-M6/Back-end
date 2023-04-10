import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinTable,
  } from "typeorm";
  
  @Entity("announces")
  class Announce {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @OneToMany(() => Comment, (comments) => comments.announce)
    comments: Comment[];
  
    
  }
  
  export { Announce };
  
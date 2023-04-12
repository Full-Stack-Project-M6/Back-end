import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinTable,
  } from "typeorm";
  import { Announce } from "./announce";
  import { User } from "./user";
  
  @Entity("comments")
  class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 200 })
    comment: string;
  
    @ManyToOne(() => User, (user) => user.comments, {
      cascade: true,
      onDelete: "CASCADE",
    })
    user: User;
    
    @ManyToOne(() => Announce, (announce) => announce.comments, {
      cascade: true,
      onDelete: "CASCADE",
    })
    announce: Announce;
  
    }
  
  export { Comment };
  
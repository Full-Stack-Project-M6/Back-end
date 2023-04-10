import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinTable,
  } from "typeorm";
  
  
  @Entity("adress")
  class Adress {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ length: 50, unique: true, })
    cep: string;
  
    @Column({ length: 50})
    estate: string;
  
    @Column({ length: 50,})
    city: string;
    
    @Column({ length: 50,})
    street: string;

    @Column({ length: 50,})
    number: string;

    @Column({ length: 50,})
    complement: string;
  
    
    @JoinTable()
    user: User;
  }
  
  export { Adress };
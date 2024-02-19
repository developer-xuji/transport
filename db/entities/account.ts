import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user";

@Entity({name:'account'})
export class Account{
    @PrimaryColumn()
    username?:string

    @Column()
    password?:string

    @OneToOne(()=>User,{
      cascade:true
    })
    @JoinColumn({name:'user_id'})
    user?:User
}
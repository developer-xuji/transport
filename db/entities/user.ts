import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User{
    @PrimaryGeneratedColumn()
    id?:number

    @Column()
    fullname?:string

    @Column()
    license?:string

    @Column()
    address?:string

    @Column()
    mobile?:number

    @Column()
    role?:string   
}
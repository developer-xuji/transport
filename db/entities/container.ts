import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'container'})
export class Container{
    @PrimaryGeneratedColumn()
    id?:number

    @Column()
    containerID?:string

    @Column()
    ship?:string

    @Column()
    type?:string

    @Column()
    train?:string

    @Column()
    destination?:string

    @Column()
    enterTime?:string
}
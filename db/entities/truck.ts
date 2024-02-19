import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'truck'})
export class Truck{
    @PrimaryGeneratedColumn()
    id?:number

    @Column()
    licensePlate?:string

    @Column()
    driverName?:string

    @Column()
    phone?:string
}
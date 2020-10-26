import {BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {rideStatus} from "../types/types";


class Ride extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", enum: ["ACCEPTED" , "FINISHED" , "CANCELED" , "REQUESTING" , "ONROUTE"]})
    status: rideStatus

    @Column({type: "text"})
    pickUpAdress: string

    @Column({type: "double precision", default: 0})
    pickUpLat: number

    @Column({type: "double precision", default: 0})
    pickUpLng: number

    @Column({type: "text"})
    dropOffAdress: string

    @Column({type: "double precision", default: 0})
    dropOffLat: number

    @Column({type: "double precision", default: 0})
    dropOffLng: number

    @Column({type: "double precision", default: 0})
    price: number

    @Column({type: "text"})
    distance: string

    @Column({type: "double precision", default: 0})
    duration: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
}

export default Ride
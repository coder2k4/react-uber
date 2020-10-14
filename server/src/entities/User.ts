import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail} from "class-validator"

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", unique: true})
    @IsEmail()
    email: string

    @Column({type: "boolean", default: false})
    verifiedEmail: boolean

    @Column({type: "string"})
    firstName: string

    @Column({type: "string"})
    lastName: string

    @Column({type: "int"})
    age: number

    @Column({type: "string"})
    password: string

    @Column({type: "string"})
    phoneNumber: string

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber: boolean

    @Column({type: "string"})
    profilePhoto: string

    @CreateDateColumn()
    createdAt: string

    @CreateDateColumn()
    updatedAt: string

    @Column({type: "string"})
    fullName: string

    @Column({type: "boolean", default: false})
    isDriving: boolean

    @Column({type: "boolean", default: false})
    isRiding: boolean

    @Column({type: "boolean", default: false})
    isTaken: boolean

    @Column({type: "float"})
    lastLng: number

    @Column({type: "float"})
    lastLat: number

    @Column({type: "float"})
    lastOrientation: number

}

export default User;
import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {IsEmail} from "class-validator"
import bcrypt from "bcrypt"


const BCROUNDS = 10

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", unique: true})
    @IsEmail()
    email: string

    @Column({type: "boolean", default: false})
    verifiedEmail: boolean

    @Column({type: "text"})
    firstName: string

    @Column({type: "text"})
    lastName: string

    @Column({type: "int"})
    age: number

    @Column({type: "text"})
    password: string

    @Column({type: "text"})
    phoneNumber: string

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber: boolean

    @Column({type: "text"})
    profilePhoto: string

    @Column({type: "boolean", default: false})
    isDriving: boolean

    @Column({type: "boolean", default: false})
    isRiding: boolean

    @Column({type: "boolean", default: false})
    isTaken: boolean

    @Column({type: "double precision", default: 0})
    lastLng: number

    @Column({type: "double precision", default: 0})
    lastLat: number

    @Column({type: "double precision", default: 0})
    lastOrientation: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }    

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if (this.password) {
            this.password = await this.hashPassword(this.password)
        }
    }

    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password,BCROUNDS)
    }

    public async comparePassword(password: string, hashString: string): Promise<boolean> {
        return await bcrypt.compare(password, hashString)
    }

}

export default User;
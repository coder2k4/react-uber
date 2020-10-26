import {ConnectionOptions} from 'typeorm'

console.log(process.env.DB_ENDPOINT)

const connectionOptions: ConnectionOptions = {
    type: "postgres",
    database: "uber",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.*"],
    host: process.env.DB_ENDPOINT || "localhost",
    port: 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || ""
}

export default connectionOptions
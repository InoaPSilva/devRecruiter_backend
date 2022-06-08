import { Connection } from 'typeorm'
import {  Resume  } from './resume.entity'

export const resumeProviders = [{
    provider: 'RESUME_RESPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Resume),
    inject: ['DATABASE_CONNECTION']
} ]
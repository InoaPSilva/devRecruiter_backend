import { Connection } from "typeorm";
import { Resume } from "./resume.entity";

export const resumeProviders = [
  {
    provide: "RESUME_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(Resume),
    inject: ["DATABASE_CONNECTION"],
  },
];

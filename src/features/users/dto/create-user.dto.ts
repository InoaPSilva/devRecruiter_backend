export class CreateUserDto {
  //receber informações do front
  //as insormações que vão para o banco de dados
  id: number;
  isAdmin: boolean;
  name: string;
  email: string;
  password: string;
  district: string;
  state: string;
  city: string;
}

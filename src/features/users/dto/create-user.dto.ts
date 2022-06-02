export class CreateUserDto {
  //receber informações do front
  //as insormações que vão para o banco de dados
  isAdmin: boolean;
  email: string;
  name: string;
  password: string;
}

export class Principal {
  id: number;
  name: string;
  firstName: string;
  email: string;
  login: string;
  password: string;
  country: string;
  age: number;
  admin: boolean;

  static initPrincipal(principal: Principal): Principal {
    const p = new Principal();
    p.id = principal.id;
    p.name = principal.name;
    p.firstName = principal.firstName;
    p.email = principal.email;
    p.login = principal.login;
    p.password = principal.password;
    p.country = principal.country;
    p.age = principal.age;
    p.admin = principal.admin;

    return p;
  }
}

export class RegisterView {
  name: string;
  //firstName: string;
  email: string;
  login: string;
  password: string;
  //country: string;
  //age: number;
  //admin: boolean;
}

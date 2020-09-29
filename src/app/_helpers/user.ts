export  class Role {
  id:number;
  Erole:ERole;

}
enum ERole {
  ROLE_USER,
  ROLE_BILLINGMANAGER,
  ROLE_ADMIN


}

export class User {
  id :number;
  username:string;
  email:string;
  password:string;
  roles:[Role];
}

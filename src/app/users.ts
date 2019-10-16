export class Users {

    id: number;
    name: string;
    email: string;
    password: string;

    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// need to double-check how this one is setup in pulling information.  The User info is setup on the server as:  
//  fullName: string;
//  email: string;
//  password: string; 

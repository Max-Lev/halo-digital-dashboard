export interface IUserModel {
    name: {
        first: string,
        last: string
    };
    email: string;
    dob: {
        date: string
    };
    location: {
        street: string;
    };
    phone: string;
    login: {
        password: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    }
};


export class UserModel implements IUserModel {
    name: { first: string; last: string; };
    email: string;
    dob: { date: string };
    location: { street: string };
    phone: string;
    login: { password: string; };
    picture: { large: string; medium: string; thumbnail: string; };
    constructor(user: IUserModel) {
        this.name = { ...user.name };
        this.email = user.email;
        this.dob = { ...user.dob };
        this.location = { ...user.location };
        this.phone = user.phone;
        this.login = { ...user.login };
        this.picture = {...user.picture}

        console.log(this);
    };

}
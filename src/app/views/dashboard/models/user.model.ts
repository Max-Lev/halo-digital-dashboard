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
    };
    voteCounter: number;
};


export class UserModel implements IUserModel {
    name: { first: string; last: string; };
    email: string;
    dob: { date: string };
    location: { street: string };
    phone: string;
    login: { password: string; };
    picture: { large: string; medium: string; thumbnail: string; };
    voteCounter: number = 0;
    constructor(user: IUserModel) {
        this.name = { ...user.name };
        this.email = user.email;
        this.dob = { ...user.dob };
        this.location = { ...user.location };
        this.phone = user.phone;
        this.login = { ...user.login };
        this.picture = { ...user.picture };
        this.voteCounter = (user.voteCounter === undefined) ? 0 : user.voteCounter;
    };

}
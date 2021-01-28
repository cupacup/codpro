export class Comment{
    data: CommentData[];
}

export class CommentData{
    id: number;
    message: string;
    owner: UserData;
    publishDate: number;
}

export class User{
    data: UserData[];
}

export class UserData{
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export class UserDetail{
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: Date;
    registerDate: string;
    phone: string;
    picture: string;
    location: Location;
}

export class Location{
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}
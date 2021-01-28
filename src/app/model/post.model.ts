export class Post{
    data: Array<PostData>;
    total: any;
}

export class PostData{
    id: string;
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: Owner;
}

export class Owner{
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export class Tag{
    data: string[];
}


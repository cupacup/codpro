import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostData, Tag } from './model/post.model';
import { User, UserDetail } from './model/user.model';

const APP_ID = '6011c26cb802a2bd07a30d5d';

@Injectable({
  providedIn: 'root'
})

export class ServService {
  private post: string='https://dummyapi.io/data/api/post';
  private user: string='https://dummyapi.io/data/api/user';
  private tag: string="https://dummyapi.io/data/api/tag";
  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get<Post[]>(this.post,{headers:{'app-id': APP_ID}});
  }

  getPostDetail(id){
    return this.http.get<PostData[]>(this.post+'/'+id,{headers:{'app-id': APP_ID}});
  }

  getComment(id){
    return this.http.get<Comment[]>(this.post+'/'+id+'/comment',{headers:{'app-id': APP_ID}});
  }

  getUser(){
    return this.http.get<User[]>(this.user,{headers:{'app-id': APP_ID}});
  }

  getUserDetail(id){
    return this.http.get<UserDetail[]>(this.user+'/'+id,{headers:{'app-id': APP_ID}});
  }

  getUserPost(id){
    return this.http.get<Post[]>(this.user+'/'+id+'/post',{headers:{'app-id': APP_ID}});
  }

  getTags(){
    return this.http.get<Tag[]>(this.tag,{headers:{'app-id': APP_ID}});
  }

}
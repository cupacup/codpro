import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts:any;
  id: number;
  tag: string;

  constructor(private dataService: ServService, private router: Router) { }

  ngOnInit() {
    this.dataService.getPosts()
    .subscribe(data=>this.posts=data);
  }

  PostPages(id){
    this.router.navigateByUrl('/post/'+id);
  }

  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

}

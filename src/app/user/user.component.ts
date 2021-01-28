import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { User } from '../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:User[];
  public detailUser:any;
  public posts:any;
  id: number;
  
  constructor(private dataService: ServService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    
    this.dataService.getUserDetail(this.id)
    .subscribe(data=>this.detailUser=data);

    this.dataService.getUserPost(this.id)
    .subscribe(data=>this.posts=data);
  }

  PostPage(id){
    this.router.navigateByUrl('/post/'+id);
  }
  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }
}

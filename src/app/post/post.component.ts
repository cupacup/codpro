import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post:any;
  public comm:any;
  id: number;
  tag: string;

  constructor(private dataService:ServService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    this.dataService.getPostDetail(this.id)
    .subscribe(data=>this.post=data);

    this.dataService.getComment(this.id)
    .subscribe(data=>this.comm=data);
  }
  
  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

}

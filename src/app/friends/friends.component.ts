import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  public users:any;
  tag:string;
  
  constructor(private dataService:ServService,private router:Router) { }

  ngOnInit() {
    this.dataService.getUser()
    .subscribe(data=>this.users=data);
  }

  explore(tag){
    this.router.navigateByUrl('/explore/'+tag);
  }

}

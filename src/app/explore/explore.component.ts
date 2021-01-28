import { Component, OnInit } from '@angular/core';

import { ServService } from '../serv.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  
  public tags:any;
  
  constructor( private dataServ: ServService) { }

  ngOnInit() {
      this.dataServ.getTags()
      .subscribe(data=>this.tags=data);
    
  }

  

}

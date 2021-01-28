import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { UserComponent } from './user/user.component';
import { ExploreComponent } from './explore/explore.component';
import { PostComponent } from './post/post.component';



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'friends',component:FriendsComponent},
  {path: 'user/:id',component:UserComponent},
  {path: 'post/:id', component:PostComponent},
  {path: 'explore/:tag',component:ExploreComponent},
  {path: 'explore', component:ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

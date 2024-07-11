import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule, RouterLink, NgClass],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{
  user: string;
  loggedIn: boolean
  selectedItem: Post;
  constructor(private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private userService: UserService
  ){
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.selectedItem = this.postsService.getPostById(params['id'])
        }
      }
    )
  }

  ngOnInit(): void {
    this.loggedIn = this.userService.getState()
    this.user = this.userService.getUser()
  }

  deletePost(): void {
    this.postsService.removePost(this.selectedItem.id)
  }
}

import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent implements OnInit{
  postsList: Post[] = []
  constructor(private postsService: PostsService){
    
  }

  ngOnInit(): void {
    this.postsList = this.postsService.getAllPosts()
  }
}

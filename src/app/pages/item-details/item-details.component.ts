import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  selectedItem?: Post;
  constructor(private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ){
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.selectedItem = this.postsService.getPostById(params['id'])
        }
      }
    )
  }
}

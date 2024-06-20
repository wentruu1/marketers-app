import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsList: Post[] = [
    {
      id: 1,
      name: "Silla Gamer",
      description: "Silla Gamer Casi Nueva"
    },
    {
      id: 2,
      name: "Television 40pulgadas",
      description: "Televisor LG 40 pulgadas Usado"
    }
  ]
  constructor() { }
  
  getAllPosts(): Post[] {
    return this.postsList
  }
  addPost(post: Post) {
    this.postsList.push(post)
  }
  removePost(id: number) {
    let postId = this.postsList.findIndex(p => p.id === id)
    this.postsList.splice(postId,1)
  }
}

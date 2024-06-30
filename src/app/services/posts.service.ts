import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsList: Post[] = [
    {
      id: 1,
      name: "Silla Gamer",
      description: "Silla Gamer Casi Nueva",
      price: 35,
      isSaved: false
      
    },
    {
      id: 2,
      name: "Television 40pulgadas",
      description: "Televisor LG 40 pulgadas Usado",
      price: 120,
      isSaved: false
    }
  ]
  constructor() { }
  
  getAllPosts(): Post[] {
    return this.postsList
  }
  getPostById(id: number) {
    return this.postsList.find(post => post.id === id)!
  }
  addPost(post: Post) {
    this.postsList.push(post)
  }
  removePost(id: number) {
    let postId = this.postsList.findIndex(p => p.id === id)
    this.postsList.splice(postId,1)
  }
}

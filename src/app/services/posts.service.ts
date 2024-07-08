import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsList: Post[] = [
    {
      id: "1",
      name: "Silla Gamer",
      description: "Silla Gamer Casi Nueva",
      price: 35,
      
    },
    {
      id: "2",
      name: "Television 40pulgadas",
      description: "Televisor LG 40 pulgadas Usado",
      price: 120,
    }
  ]
  constructor() { }
  
  getAllPosts(): Post[] {
    return this.postsList
  }
  getPostById(id: string) {
    return this.postsList.find(post => post.id === id)!
  }
  addPost(post: Post) {
    this.postsList.push(post)
  }
  editPost(editedPost: Post) {
    let indexToUpdate = this.postsList.findIndex(p => p.id === editedPost.id)
    this.postsList[indexToUpdate] = editedPost
  }
  removePost(id: string) {
    let postId = this.postsList.findIndex(p => p.id === id)
    this.postsList.splice(postId,1)
  }
}

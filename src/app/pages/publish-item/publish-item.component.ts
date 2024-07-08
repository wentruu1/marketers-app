import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { Router } from '@angular/router';
@Component({
  selector: 'app-publish-item',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './publish-item.component.html',
  styleUrl: './publish-item.component.css'
})
export class PublishItemComponent implements OnInit{
  publishForm: FormGroup
  
  constructor(private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.publishForm = this.formBuilder.group({
      name: [null, Validators.required],
      desc: [null, Validators.required],
      price: [null, Validators.required],
    })
  }

  onSubmit() {
    let newPost: Post = {
      id: (this.postsService.getAllPosts().length + 1).toString(),
      name: this.publishForm.get("name")?.value,
      description: this.publishForm.get("desc")?.value,
      price: this.publishForm.get("price")?.value
    }
    this.postsService.addPost(newPost)
    this.router.navigate(["/marketplace"])
  }
}

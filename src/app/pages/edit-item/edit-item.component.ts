import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { Post } from '../../models/post';
import { ActivatedRoute, Router  } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent implements OnInit{
  editForm: FormGroup;
  selectedItem: Post;
  constructor(private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.editForm = this.formBuilder.group({
      name: [this.selectedItem.name, Validators.required],
      desc: [this.selectedItem.description, Validators.required],
      price: [this.selectedItem.price, Validators.required],
    })
  }

  onSubmit(): void {
    let editedItem: Post = {
      id: this.selectedItem.id,
      name: this.editForm?.get("name")?.value,
      description: this.editForm?.get("desc")?.value,
      price: this.editForm?.get("price")?.value,
    }
    this.postsService.editPost(editedItem)
    this.router.navigate(["/p",this.selectedItem.id])
  }
}

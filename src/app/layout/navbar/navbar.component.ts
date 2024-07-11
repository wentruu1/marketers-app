import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatButtonModule,
    MatIconModule,MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  user: string;
  isLoggedIn: boolean
  constructor(private userService: UserService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.isLoggedIn = this.userService.getState()
  }
  changeState(): void {
    this.userService.changeState()
    this.isLoggedIn = this.userService.getState()
    this.router.navigate(["/"])
  }

}

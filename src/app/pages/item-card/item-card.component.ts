import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() item!: Post;
}

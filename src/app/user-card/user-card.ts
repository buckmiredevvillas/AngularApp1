import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  @Input() name: string = 'Karen Buckmire';
  @Input() age: number = 58;
  @Input() email: string = 'user@example.com';
}
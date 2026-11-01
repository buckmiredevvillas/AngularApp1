
import { Component } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { UserStatus } from './user-status/user-status';
import { UserBio } from './user-bio/user-bio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCard, UserStatus, UserBio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Karen Buckmire';
  age = 58;
  email = 'user@example.com';

  isOnline = true;

  bio = 'I am learning Web Development and AI at triOS College. I enjoy technology, travelling, and learning new skills.';

  updateStatus(status: boolean) {
    this.isOnline = status;
  }

  updateBio(newBio: string) {
    this.bio = newBio;
  }
} 
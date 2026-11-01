import { Component } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { UserStatus } from './user-status/user-status';
import { UserBio } from './user-bio/user-bio';

// Interface to define the structure of user information
interface User {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCard, UserStatus, UserBio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  // User information using the TypeScript interface
  user: User = {
    name: 'Karen Buckmire',
    age: 58,
    email: 'user@example.com'
  };

  // Properties passed to the UserCard component
  name = this.user.name;
  age = this.user.age;
  email = this.user.email;

  // Initial online status
  isOnline = true;

  // Initial user biography
  bio = 'I am learning Web Development and AI at triOS College. I enjoy technology, travelling, and learning new skills.';

  // Updates online/offline status
  updateStatus(status: boolean) {
    this.isOnline = status;
  }

  // Saves the updated biography
  updateBio(newBio: string) {
    this.bio = newBio;
  }
}
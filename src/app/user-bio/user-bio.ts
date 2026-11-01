import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.css'
})
export class UserBio {
  @Input() bio: string = 'Welcome to my profile!';
  @Output() bioChange = new EventEmitter<string>();

  isEditing = false;
  draftBio = '';

  editBio() {
    this.draftBio = this.bio;
    this.isEditing = true;
  }

  saveBio() {
    this.bioChange.emit(this.draftBio);
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
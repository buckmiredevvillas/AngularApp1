import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  templateUrl: './user-status.html',
  styleUrl: './user-status.css'
})
export class UserStatus {
  @Input() isOnline: boolean = true;
  @Output() statusChange = new EventEmitter<boolean>();

  toggleStatus() {
    this.statusChange.emit(!this.isOnline);
  }
}
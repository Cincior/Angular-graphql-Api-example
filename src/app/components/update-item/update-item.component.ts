import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlServiceService, User } from '../../services/graphql-service.service';

@Component({
  selector: 'app-update-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent {
  inputId: number | null = null;
  inputName: String = '';
  inputEmail: String = '';
  constructor(private graphqlService: GraphqlServiceService) {}
  submit() {
    if(this.inputId === null) {
      return;
    }
    const user: User = {id: this.inputId, name: this.inputName, email: this.inputEmail};
    this.graphqlService.updateUser(user).subscribe({
      next: (updatedUser) => {
        console.log('dodano' + updatedUser.data.updateUser.email)
      }
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlServiceService } from '../../services/graphql-service.service';

@Component({
  selector: 'app-add-item-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item-component.component.html',
  styleUrl: './add-item-component.component.css'
})
export class AddItemComponentComponent {
  constructor(private graphqlService: GraphqlServiceService) {};

  name: String = '';
  email: String = '';
  
  submit() {
    this.graphqlService.addUser(this.name, this.email);
    console.log('zapisano!');
    this.name = '';
    this.email = '';
  }
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphqlServiceService } from '../../services/graphql-service.service';

@Component({
  selector: 'app-delete-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-component.component.html',
  styleUrl: './delete-component.component.css'
})
export class DeleteComponentComponent {
  @ViewChild('inputId') inputRef! : ElementRef<HTMLInputElement>;
  constructor(private graphqlService: GraphqlServiceService) {}

  public submit(deletionId: string) {
    this.graphqlService.deleteUser(parseInt(deletionId));
    this.inputRef.nativeElement.value = '';
  }
}

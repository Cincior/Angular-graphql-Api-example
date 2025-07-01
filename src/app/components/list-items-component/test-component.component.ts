import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, finalize, tap } from 'rxjs';
import { GraphqlServiceService, User } from '../../services/graphql-service.service';

@Component({
  selector: 'app-test-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  namesList: User[] = []
  filteredList: User[] = [];
  nameInput = new FormControl('');
  isLoading = false;

  constructor(private graphqlService: GraphqlServiceService) {
    
  }

  ngOnInit() {
    this.loadUsers();

    this.nameInput.valueChanges
      .pipe(
        tap({ next: () => this.isLoading = true }),
        debounceTime(1000),
        tap({ next: () => this.isLoading = false })
      )
      .subscribe({  
        next: (val) => {
          console.log('amen')
        const lowerVal = val?.toLowerCase() || '';
        this.filteredList = this.namesList.filter((user) =>
          user.name.toLowerCase().startsWith(lowerVal)
        );
      }});

  }

  public loadUsers() {
    this.isLoading = true;
    this.graphqlService.getAllUsers().pipe(
      delay(300),
      finalize(() => {this.isLoading = false})
    ).subscribe({
      next: (usersFromApi) => {
        setTimeout(() => {}, 2000)
        this.namesList = usersFromApi;
        this.filteredList = this.namesList;
        console.log(usersFromApi); 
      }
    });
  }

}

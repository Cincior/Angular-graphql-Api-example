import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User {
  id: number,
  name: String,
  email: String
}

interface GrapQLResponse<T> {
  data: T
}

@Injectable({
  providedIn: 'root'
})
export class GraphqlServiceService {
  private graphqlURL = 'http://localhost:4000/graphql';

  constructor(private http: HttpClient) { };

  public getAllUsers(): Observable<User[]> {
    // query do api
    const query = `
      query {
        allUsers {
          id,
          name,
          email
        }
      }
    `;

    return this.http.post<GrapQLResponse<{allUsers: User[]}>>(this.graphqlURL, { query })
    .pipe(
      map(response => response.data.allUsers) 
    )
  } 

  public addUser(name: String, email: String) {
    const mutation = `
      mutation {
        addUser(name: "${name}", email: "${email}") {
          id,
          name,
          email
        }
      }
    `

    this.http.post<GrapQLResponse<{newUser: User}>>(this.graphqlURL, {query: mutation}).subscribe(
      {
        next: () => {console.log("dodalem!")}
      }
    )
  }

  public deleteUser(id: number) {
    const mutation = `
      mutation {
        delUser(id: ${id})
      }
    `;

    this.http.post<GrapQLResponse<{isDeleted: boolean}>>(this.graphqlURL, {query: mutation}).subscribe({
      next: (is) => {console.log("Usunieto!")}
    })
  }

  public updateUser(user: User) {
    let inputFiles = `id: ${user.id}`;

    if(user.name && user.name.trim() != '') {
      inputFiles += `, name: "${user.name}"`;
    }

    if(user.email && user.email.trim() != '') {
      inputFiles += `, email: "${user.email}"`;
    }

    const mutation = `
      mutation {
        updateUser(${inputFiles}) {
          id,
          name,
          email
        }
      }
    `;

    return this.http.post<GrapQLResponse<{updateUser: User}>>(this.graphqlURL, {query: mutation});
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from "./components/test-component/test-component.component";
import { AddItemComponentComponent } from "./components/add-item-component/add-item-component.component";
import { DeleteComponentComponent } from "./components/delete-component/delete-component.component";

@Component({
  selector: 'app-root',
  imports: [TestComponentComponent, AddItemComponentComponent, DeleteComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NaukaRxJS';
}

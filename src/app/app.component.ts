import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from "./components/list-items-component/test-component.component";
import { AddItemComponentComponent } from "./components/add-item-component/add-item-component.component";
import { DeleteComponentComponent } from "./components/delete-component/delete-component.component";
import { UpdateItemComponent } from "./components/update-item/update-item.component";

@Component({
  selector: 'app-root',
  imports: [TestComponentComponent, AddItemComponentComponent, DeleteComponentComponent, UpdateItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NaukaRxJS';
}

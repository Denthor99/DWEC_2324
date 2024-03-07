import { Component } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inout';
  productos:Array<Product>=[
      {art:'Xbox-360', precio:115},
      {art:'bolso', precio:185},
      {art:'coche', precio:40850}
  ];

  add(newCard:Product):void{
    this.productos.push(newCard);
  }
}

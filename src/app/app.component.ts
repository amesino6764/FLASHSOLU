import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Carrito', url: '/folder/Carrito', icon: 'cart' },
    { title: 'Pedidos', url: '/folder/Pedidos', icon: 'list' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
  ];
  num : any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  Empresa = {
    nit : 242365724,
    name : "FLASH SOLUTION",
    Direccion:{
      calle: 50,
      segundo : 84,
      numero : 132
    },
    city:"Barranquilla",
    children:["nel","nel1"],
    num:2,
    num1:3
  };
  constructor() {

  }
}

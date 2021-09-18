import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public list = [
    { id: 1, name: 'Audifonos', precio: 10000 },
    { id: 2, name: 'Celulares', precio: 159000 },
    { id: 3, name: 'Gafas', precio: 30000 },
    { id: 4, name: 'Computadores', precio: 590000 },
    { id: 5, name: 'Portatil', precio: 1590000 },
    { id: 5, name: 'Sillas gamer', precio: 960000 },
    { id: 5, name: 'Tarjetas graficas', precio: 640000 },
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

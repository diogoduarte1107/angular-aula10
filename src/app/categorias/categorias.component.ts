import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../domain/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria : Categoria[];
  
  constructor(private categoriasService : CategoriasService) { 
  this.getCategoria();
  
}
  
ngOnInit() {
  }

  getCategoria(){
    this.categoriasService.getCategorias()
      .subscribe(response => {
        this.categoria = response;
        console.log(response);
      })
  }

}

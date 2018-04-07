import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../domain/categorias';

@Injectable()
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`https://tcc-lojavirtual.herokuapp.com/categorias`);
  }

}

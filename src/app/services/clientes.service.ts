import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../domain/clientes';


@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Clientes[]> {
    
    return this.http.get<Clientes[]>(`https://tcc-lojavirtual.herokuapp.com/clientes`);
  }

}

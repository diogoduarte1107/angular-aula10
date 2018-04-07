import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../domain/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  
  cliente : Clientes[];
 
 
  constructor(private clientesService : ClientesService) { 
    this.getCliente();
  }

 ngOnInit() {
   
 }

 getCliente(){
   this.clientesService.getClientes()
     .subscribe(response => {
       this.cliente = response;
       console.log(response);
     })
 }

}





 
import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente } from './../clientes.model';
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent implements OnInit{
  clientes: Cliente[];
  constructor(private clientesService: ClientesService){
    this.clientes = this.clientesService.getClientes();
  }
  ngOnInit(): void {
    
  }
}

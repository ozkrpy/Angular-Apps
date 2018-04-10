import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {CollectionViewer, DataSource} from "@angular/cdk/collections";

import { ApisService } from '../../services/apis.service';
import { AlimentoDetalle } from '../../data-model/alimento-detalle';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  private loading: boolean = false;
  private todosAlimentos: Observable<AlimentoDetalle[]>;

  dataSource = new UserDataSource(this.ws);
  displayedColumns = ['codigo', 'descripcion', 'tipo', 'medida', 'hidratos', 'proteinas', 'grasas', 'fibras', 'edicion'];
  
  constructor(private ws: ApisService) {
  }

  ngOnInit() {
    // this.loading = true;
    //this.recuperarListaAlimentos();
  }

  recuperarListaAlimentos() {
    this.todosAlimentos = this.ws.todosLosAlimentos();
  }

  detalleAlimento(codigo: number) {
    console.log("metodo para detalle de alimento: " + codigo);
    
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private ws: ApisService) {
    super();
  }
  connect(): Observable<AlimentoDetalle[]> {
    return this.ws.todosLosAlimentos();
  }

  disconnect() {}
}
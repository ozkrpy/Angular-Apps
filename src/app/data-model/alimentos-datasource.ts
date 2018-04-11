import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable } from 'rxjs';

import { ApisService } from '../services/apis.service';
import { AlimentoDetalle } from './alimento-detalle';


export class AlimentosDatasource extends DataSource<any> {
    constructor(private ws: ApisService) {
      super();
    }
    connect(): Observable<AlimentoDetalle[]> {
      return this.ws.todosLosAlimentos();
    }
  
    disconnect() {}
  }
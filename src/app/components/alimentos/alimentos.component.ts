import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { ApisService } from '../../services/apis.service';
import { AlimentoDetalle } from '../../data-model/alimento-detalle';
import { AlimentosDatasource } from '../../data-model/alimentos-datasource';

import { AlimentosDetalleComponent } from '../../dialogs/alimentos-detalle/alimentos-detalle.component';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {
  dialogResult: string = "";

  private loading: boolean = false;
  private todosAlimentos: Observable<AlimentoDetalle[]>;

  dataSource = new AlimentosDatasource(this.ws);
  displayedColumns = ['codigo', 'descripcion', 'tipo', 'medida', 'hidratos', 'proteinas', 'grasas', 'fibras', 'edicion'];
  
  constructor(private ws: ApisService, 
              public dialog: MatDialog) {
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
    let dialogRef = this.dialog.open( 
                                      AlimentosDetalleComponent, 
                                      { width: '70%', height: '', data: codigo}
    );
    dialogRef.afterClosed().subscribe(result => {
                                        console.log(`Dialogo cerrado: ${result}`);
                                        this.dialogResult = result;
                                        // this.actualizaListaPacientes();//this.todosLosPacientes = this.ws.todosLosPacientes();
    });
  }

}


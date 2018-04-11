import { Component, OnInit, Inject } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { AlimentoDetalle } from '../../data-model/alimento-detalle';


@Component({
  selector: 'app-alimentos-detalle',
  templateUrl: './alimentos-detalle.component.html',
  styleUrls: ['./alimentos-detalle.component.css']
})
export class AlimentosDetalleComponent implements OnInit {

  detalleAlimentoObservable: Observable<AlimentoDetalle>;

  constructor(
    public thisDialogRef: MatDialogRef<AlimentosDetalleComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: number,
    private ws: ApisService,
    public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.actualizaDatosAlimento();
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  editarAlimento(codigo: number) {
    console.log("metodo para editar detalle de alimento: " + codigo);
    
  }

  actualizaDatosAlimento() {
    console.log("entro a recuperar informacion del alimento: " + this.data)
    this.detalleAlimentoObservable = this.ws.alimentoPorCodigo(this.data)
      .map(res => {
        return res;
      });

  }

  openSnackbar(message: string) {
    this.snackbar.open(message, "OK", { duration: 5000 });
  }
  
}

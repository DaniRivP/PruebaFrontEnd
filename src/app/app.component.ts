// app.component.ts

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './servicios/api/api.service'; 
import { FacturaI } from './factura';
import { NuevaFacturaModalComponent } from './nuevafacturamodal/nuevafactura.component';
import { NuevaLineaModalComponent } from './nuevalineamodal/nuevalineamodal.component';

@Component({
  selector: 'app-facturas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class FacturasComponent {
  factura: FacturaI = { FACTURA: { TOTAL: '', FECHA: '', NUMERO_FACTURA: '' } };


  constructor(private modalService: NgbModal) {
   
  }

  abrirModalNuevaFactura() {
    const modalRef = this.modalService.open(NuevaFacturaModalComponent);

    modalRef.result.then((result) => {
      console.log(`Modal cerrado con resultado: ${result}`);
    }, (reason) => {
      console.log(`Modal cerrado con razón: ${reason}`);
    });
  }

  abrirModalNuevaLinea() {
    const modalRef = this.modalService.open(NuevaLineaModalComponent);

    modalRef.result.then((result) => {
      console.log(`Modal cerrado con resultado: ${result}`);
    }, (reason) => {
      console.log(`Modal cerrado con razón: ${reason}`);
    });
  }

  // consultarFactura(numeroFacturaConsultar: string = '') {
  //   this.apiService.ObtenerFactura(numeroFacturaConsultar).subscribe(
  //     (data: FacturaI) => {
  //       if (data && 'FACTURA' in data) {
  //         this.factura = data;
  //       } else {
  //         console.error('La respuesta del servicio no tiene la estructura esperada', data);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error al obtener la factura', error);
  //     }
  //   );
  // }
}

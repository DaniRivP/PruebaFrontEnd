import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../servicios/api/api.service';

@Component({
  selector: 'app-nueva-factura-modal',
  templateUrl: './nuevafactura.component.html',
  styleUrls: ['./nuevafactura.component.css'],
})
export class NuevaFacturaModalComponent {
  numeroFactura: string = '';
  fecha: string = '';

  constructor(public activeModal: NgbActiveModal) {}

 
  crearNuevaFactura(): void {
    if (this.numeroFactura && this.fecha) {
      
    } else {
      console.error('Todos los campos deben ser llenados.');
    }
  }

}

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nueva-linea-modal',
  templateUrl: './nuevalineamodal.component.html',
  styleUrls: ['./nuevalineamodal.component.css']
})
export class NuevaLineaModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

  agregarArticulo() {

    console.log('Agregando artículo');

    this.activeModal.close();
  }
}

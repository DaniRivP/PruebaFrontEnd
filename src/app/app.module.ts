import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./servicios/api/api.service";
import { NuevaFacturaModalComponent } from "./nuevafacturamodal/nuevafactura.component";
import { NuevaLineaModalComponent } from "./nuevalineamodal/nuevalineamodal.component";
import { FacturasComponent } from "./app.component";

@NgModule({
  declarations: [
    NuevaFacturaModalComponent,
    NuevaLineaModalComponent,
    FacturasComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [FacturasComponent]
})

export class AppModule { }

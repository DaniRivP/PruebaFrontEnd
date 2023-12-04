import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaI } from '../../factura';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.cafebritt.com/test/functions/api.cfc';

  constructor(private http: HttpClient) {}

  ObtenerFactura(numeroFactura: string): Observable<any> {
    const url = `${this.apiUrl}?method=ObtieneFactura&token=3859376832&numero_factura=${numeroFactura}`;
    return this.http.get<FacturaI>(url);
  }

  buscarProducto(producto: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?method=BuscarProducto&token=&producto=${producto}`);
  }

  agregarDetalle(codigoArticulo: string, cantidad: string, numeroFactura: string): Observable<any> {
    return this.http.post(`${this.apiUrl}?method=AgregaDetalle&token=&codigo_articulo=${codigoArticulo}&cantidad=${cantidad}&numero_factura=${numeroFactura}`, {});
  }

  borrarDetalle(linea: string, numeroFactura: string): Observable<any> {
    return this.http.post(`${this.apiUrl}?method=BorrarDetalle&token=&linea=${linea}&numero_factura=${numeroFactura}`, {});
  }

  crearFactura(numeroFactura: string, fecha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}?method=CreaFactura&token=&numero_factura=${numeroFactura}&fecha=${fecha}`, {});
  }
}

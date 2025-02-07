import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventario',
  standalone: true,
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  imports: [CommonModule, HttpClientModule],
})
export class InventarioComponent {
  cargando = false;
  error = false;
  errorMessage = '';
  inventario: any[] = [];

  private urlApi = 'https://us-central1-chatbot-445904.cloudfunctions.net/function-1';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarInventario();
  }

  /**
   * Obtiene el inventario desde la API y actualiza los valores en la tabla.
   */
  cargarInventario(): void {
    this.cargando = true;
    this.error = false;

    this.obtenerInventario().subscribe({
      next: (response) => {
        if (response && Object.keys(response).length > 0) {
          this.inventario = this.formatearDatos(response);
        } else {
          this.error = true;
          this.errorMessage = 'No hay inventario disponible.';
        }
      },
      error: (err) => {
        this.error = true;
        this.errorMessage = 'Error al conectar con el servidor.';
      },
      complete: () => {
        this.cargando = false;
      },
    });
  }

  /**
   * Llama a la API y devuelve un Observable con los datos del inventario.
   */
  private obtenerInventario(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  /**
   * Formatea los datos de la API para convertirlos en una lista para la tabla.
   */
  private formatearDatos(data: any): any[] {
    const resultado: any[] = [];
    Object.keys(data).forEach((usuario) => {
      data[usuario].forEach((item: any) => {
        resultado.push({
          usuario,
          ...item,
        });
      });
    });
    return resultado;
  }
}

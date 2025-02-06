import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

interface Activo {
  etiqueta_activo: string;
  numero_serie: string;
  item_description: string;
  marca: string;
  funcion_name: string;
  fecha_alta: string;
  ubicacion_asignada: string;
  piso: string;
  asignado: string;
  tipo_usuario: string;
  estado_teams: string;
  estado_respuesta: string;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule], // ✅ CommonModule para ngFor y ngIf
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inventario: Record<string, Activo[]> | null = null; // ✅ Inicializamos en null
  urlApi = 'https://us-central1-chatbot-445904.cloudfunctions.net/function-1';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.obtenerInventario();
    
    // Monitoreo: Imprime `inventario` cada 2 segundos para ver si cambia
    setInterval(() => {
      console.log('Estado actual de inventario:', this.inventario);
    }, 2000);
  }

  obtenerInventario() {
    this.http.get<Record<string, Activo[]>>(this.urlApi).pipe(take(1)).subscribe({
      next: (data) => {
        this.inventario = data;
        console.log('Inventario recibido:', this.inventario);
        this.cdr.detectChanges(); // 👈 Forzar actualización de la vista
      },
      error: (error) => {
        console.error('Error al obtener inventario', error);
        this.inventario = {}; // 👈 Asegurar que no quede en null
      }
    });
  }

  // ✅ Nueva función para manejar Object.keys()
  getInventarioKeys(): string[] {
    return this.inventario ? Object.keys(this.inventario) : [];
  }
}

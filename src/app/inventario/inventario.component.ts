import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inventario: Record<string, Activo[]> = {}; // 👈 Especificamos que inventario es un objeto donde la clave es un string y el valor es un array de Activo
  urlApi = 'URL_DEL_ENDPOINT'; // Reemplazar con la URL real

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerInventario();
  }

  obtenerInventario() {
    this.http.get<Record<string, Activo[]>>(this.urlApi).subscribe(
      (data) => {
        this.inventario = data;
        console.log('Inventario recibido:', this.inventario);
      },
      (error) => {
        console.error('Error al obtener inventario', error);
      }
    );
  }
}

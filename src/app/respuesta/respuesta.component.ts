import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-respuesta',
  standalone: true,
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css'],
  imports: [CommonModule] // 👈 Importar CommonModule para usar *ngIf y *ngFor
})
export class RespuestaComponent implements OnInit {
  respuestas: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Simulación de datos mientras no hay API
    this.respuestas = [
      {
        CorreoUsuario: "ximenalucia.quispetenorio@kyndryl.com",
        Hora: "2025-02-07 14:30:00",
        Comentario: "Todo bien, sin fallos",
        Dispositivos: [
          { Etiqueta: "001-00001", Descripcion: "ViewSonic 22in Widescreen HD LCD Monitor", Marca: "VIEWSONIC", Estado: 1 },
          { Etiqueta: "01-040881", Descripcion: "Lenovo ThinkCentre M710q (10MQ)", Marca: "LENOVO", Estado: 1 },
          { Etiqueta: "ALQ-930", Descripcion: "Dell Latitude 3400 (P111G)", Marca: "DELL", Estado: 0 }
        ]
      },
      {
        CorreoUsuario: "juanperez@example.com",
        Hora: "2025-02-07 15:00:00",
        Comentario: "Se encontró un problema con la red",
        Dispositivos: [
          { Etiqueta: "002-00002", Descripcion: "HP EliteBook 840 G5", Marca: "HP", Estado: 0 },
          { Etiqueta: "003-00003", Descripcion: "Apple MacBook Pro 16'", Marca: "APPLE", Estado: 1 }
        ]
      },
      {
        CorreoUsuario: "maria.gomez@example.com",
        Hora: "2025-02-07 16:15:00",
        Comentario: "El teclado no funciona correctamente",
        Dispositivos: [
          { Etiqueta: "004-00004", Descripcion: "Dell Precision 5550", Marca: "DELL", Estado: 0 }
        ]
      },
      {
        CorreoUsuario: "carlos.rojas@example.com",
        Hora: "2025-02-07 17:00:00",
        Comentario: "El sistema operativo necesita actualización",
        Dispositivos: [
          { Etiqueta: "005-00005", Descripcion: "Microsoft Surface Laptop 4", Marca: "MICROSOFT", Estado: 1 },
          { Etiqueta: "006-00006", Descripcion: "Asus ROG Zephyrus G14", Marca: "ASUS", Estado: 1 }
        ]
      },
      {
        CorreoUsuario: "ana.mendoza@example.com",
        Hora: "2025-02-07 18:20:00",
        Comentario: "No se detecta el disco duro externo",
        Dispositivos: [
          { Etiqueta: "007-00007", Descripcion: "WD My Passport 1TB", Marca: "WESTERN DIGITAL", Estado: 0 }
        ]
      },
      {
        CorreoUsuario: "pedro.sanchez@example.com",
        Hora: "2025-02-07 19:30:00",
        Comentario: "Pantalla con fallas de color",
        Dispositivos: [
          { Etiqueta: "008-00008", Descripcion: "Samsung 27in Curved Monitor", Marca: "SAMSUNG", Estado: 0 }
        ]
      }
    ];
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InventarioComponent } from './inventario/inventario.component';

@Component({
  selector: 'app-root',
  standalone: true, // Tu aplicación es standalone, así que esto es clave
  imports: [HeaderComponent, RouterOutlet, HttpClientModule, InventarioComponent], // 👈 Ahora importamos HeaderComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'WebInventario';
}

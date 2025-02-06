import { Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { HeaderComponent } from './header/header.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'inventario', pathMatch: 'full' }, // Redirigir a inventario por defecto
  { path: 'inventario', component: InventarioComponent },
  { path: 'respuestas', component: RespuestaComponent } 
];

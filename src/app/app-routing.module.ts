import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Importamos el modulo de rutas de angular
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

// Creamos una constante con un array de tipo routes de angular para guardar todas nuestras rutas, la ruta '' será cuando no se escriba nada, '**' cuando se escriba cualquier ruta que no esté definida en las anteriores líneas
const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tiempo', component: TiempoComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: MainComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

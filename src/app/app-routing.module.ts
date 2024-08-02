import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

//maneja las rutas
const routes: Routes = [
  //definimos como ruta raiz (1ra vista visible al renderizar la pagina)
  {
    path:"", component:InicioComponent
  },
  /* 
  las cargas perezosas renderizan un modulo completo unicamente cuando queremos acceder a ellos,
  provocando que nuestra pagina sea mas rapida porque solo cargara los components de ESE modulo en especifico
  */
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

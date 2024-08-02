import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes locales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//IMPORTANTES PARA ACCEDER A TODAS LAS RUTAS DE LA PAGINA
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  //declaramos LOCALES del modulo -> agregados por nosotros
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  //importamos archivos, componentes de la web o de otro modulo de los que queremos tener acceso
  /*archivo de rutas (para el navegador), componentes de material que vienen desde internet
  componentes que vienen desde otro modulo (por ejemplo, una card)
  */
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  //expone los componentes locales para que puedan ser mostrados en el resto de la pagina
  //expone componentes de las web para poder tener acceso a ellos en el propio modulo
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

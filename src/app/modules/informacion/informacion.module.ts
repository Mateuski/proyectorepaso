import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';

// VISTA
import { InformacionComponent } from './page/informacion/informacion.component';
// COMPONENTES
import { CardComponent } from './components/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InformacionComponent,
    CardComponent,
    MatCardModule,
    MatButtonModule
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ],
  exports: [
    InformacionComponent
  ]
})
export class InformacionModule { }

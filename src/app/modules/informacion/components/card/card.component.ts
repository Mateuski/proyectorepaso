import { Component } from '@angular/core';
// importamos interfaz de card
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// definimos propiedad publica como INFO del tipo ARRAY

  public info: Card[];
  
  constructor(){
    this.info = [
    {
      card:"1",
      titulo:"Mandarinas",
      descripcion:"Son naranjas y de otoño",
      imagen:"https://www.gob.mx/cms/uploads/article/main_image/49906/Untitled-1.jpg",
      alt:"Foto de mandarinas"
    },
    {
      card:"2",
      titulo:"Frutillas",
      descripcion:"Son rojas y con muchas semillas",
      imagen:"https://resizer.glanacion.com/resizer/v2/frutillas-ideales-para-la-salud-de-las-personas-A2JMGE4HPREIFJ2OLM4BOLO6PE.jpg?auth=f13b6f5ce733a5e47ef1ff6c5e28362337796e5f199e6ca62a2a14901d31b4d0&width=768&quality=70&smart=false",
      alt:"Foto defrutillas"
    },
    {
      card:"3",
      titulo:"Manzanas",
      descripcion:"Son rojas y ricas",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9Qiog6LwhY1HFAajO0BKD9QO5PPrO6mDvQ&s",
      alt:"Foto de manzanas"
    }
    ]
  }

}

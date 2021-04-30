import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tarea:any={titulo:'', descripcion:''};
  constructor(private notasService:NotasService) {

   }

  ngOnInit(): void {
  }
  agregar(){
    this.notasService.addTareas(this.tarea);
  }
}

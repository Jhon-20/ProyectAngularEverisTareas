import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  tareas:any;
  tareaEditar:any={titulo:'',descripcion:''};
  constructor(private n:NotasService) { 
    this.n.retornaTareas().subscribe(tareas=>{
      this.tareas=tareas;
      console.log(this.tareas);
    })
  }

  ngOnInit(): void {
  }

  editar(tareas){
    console.log(tareas);
    this.tareaEditar=tareas;}
    editarForm(){
      this.n.editarTarea(this.tareaEditar);
    }
}

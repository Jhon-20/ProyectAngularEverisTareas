import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tareas } from 'src/app/models/tareamodel';
import {NotasService} from '../../services/notas.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tarea: Observable<Tareas[]>;
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
  retornaTareas(){
    return this.tarea;
  }
  eliminar(id){
 
    Swal.fire({
      icon: 'warning',
      title: '¿Estas seguro que deseas borrar la tarea ' + id,
      cancelButtonText: 'No borrar',
      confirmButtonText: 'Si, borrar',
      showConfirmButton: true,  
      showCancelButton: true
    }).then( value => {
      if(value.isConfirmed) {
        this.n.eliminarTarea(id);
      }
    })
  }


  editar(tareas){
    console.log(tareas);
    this.tareaEditar=tareas;
  }
  editarForm(){
    this.n.editarTarea(this.tareaEditar);
  }
}

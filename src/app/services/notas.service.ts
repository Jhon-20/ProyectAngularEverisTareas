import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tareas } from '../models/tareamodel';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private tareasCollection: AngularFirestoreCollection<Tareas>;
  private tareaDoc:AngularFirestoreDocument<Tareas>;
  tareas: Observable<Tareas[]>;
  nombre:string;
  constructor(private afs: AngularFirestore) {
    this.tareasCollection = afs.collection<Tareas>('tareas');
    this.tareas = this.tareasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tareas;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
      )
}
   retornaTareas(){
    return this.tareas;
  }
  addTareas(tarea: Tareas) {
    this.tareasCollection.add(tarea);
  }
  eliminarTarea(id){
    this.tareaDoc=this.afs.doc<Tareas>("tareas/"+id);
    this.tareaDoc.delete();
  }
  editarTarea(tareas){
    this.tareaDoc=this.afs.doc<Tareas>("tareas/"+tareas.id);
    this.tareaDoc.update(tareas);
  }
}

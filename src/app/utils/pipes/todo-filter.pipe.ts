import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../models/todo";

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(value: Todo[], is_completed: boolean = true): Todo[] {
    return value.filter(t => t.completed ===  is_completed);
    // Méthode de tableau JS qui retourne un nouveau tableau dont les elements répondent à la condition passée en callback
  }

}

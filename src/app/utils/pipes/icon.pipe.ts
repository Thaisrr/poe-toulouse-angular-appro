import { Pipe, PipeTransform } from '@angular/core';
import {ToastIcon, ToastLevel} from "../types/ToastMessages";

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(level: ToastLevel): ToastIcon {
    switch (level){
      case "success": return "task_alt";
      case "error": return "report_problem";
      case "info" : return "info";
      case "warn": return "info"
    }
  }

}

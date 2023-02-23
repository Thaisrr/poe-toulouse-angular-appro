import { Injectable } from '@angular/core';
import {ToastEvent, Toasts} from "../types/ToastMessages";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  currentToasts$ = new BehaviorSubject<Toasts>([]);
  staticToasts: Toasts = [];

  constructor() { }


  create({message, duration = 5000, level = 'info', icon}: Partial<ToastEvent> & {message: string}) {
    const id = Date.now();
    this.staticToasts.push({id, message, duration, icon, level});
    this.currentToasts$.next(this.staticToasts);
    setTimeout(() => {
      this.remove(id)
    }, duration);
  }

  remove(id: number) {
    const index = this.staticToasts.findIndex(t => t.id === id);
    if(index > -1) {
      this.staticToasts.splice(index, 1);
      this.currentToasts$.next(this.staticToasts);
    }
  }

}

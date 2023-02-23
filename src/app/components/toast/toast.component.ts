import {Component, Input, OnInit} from '@angular/core';
import {ToastEvent, Toasts} from "../../utils/types/ToastMessages";
import {BehaviorSubject, Subscription} from "rxjs";
import {ToastService} from "../../utils/services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toasts$?: BehaviorSubject<Toasts>;

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.toasts$ = this.toastService.currentToasts$;
  }

  remove(id: number) {
    this.toastService.remove(id);
  }


}

import { Component, OnInit } from '@angular/core';
import {NgxToastService} from "@thaisrr/ngx-toaster";


@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private toastService: NgxToastService
  ) { }

  ngOnInit(): void {
  }

  nice() {
    this.toastService.create({
      message: 'Hello World !'
    })
  }

  warn() {
    this.toastService.create({
      message: 'This is a warning !',
      duration: 10000,
      level: "warn"
    })
  }

  error() {
    this.toastService.create({
      message: '[Error] Oh no ! Something pretty bad is happening !',
      level: "error"
    })
  }

  errorIcon() {
    this.toastService.create({
      message: '[Error] Oh no ! Something pretty bad is happening !',
      level: "error",
      icon: "update"
    })
  }

  nicer() {
    this.toastService.create({
      message: '[Success] Everything is alright ! Yey !',
      level: "success",
      duration: 8000
    })
  }

}

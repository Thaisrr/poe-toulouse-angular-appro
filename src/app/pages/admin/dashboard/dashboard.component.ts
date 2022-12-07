import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../utils/services/admin.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users$? : Observable<any>;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe();
  }

}

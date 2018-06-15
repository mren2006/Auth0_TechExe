import { Component, OnInit } from '@angular/core';
import { usermgmtsService } from '../services/usermgmts.service';

@Component({
  selector: 'app-usermgmt-list',
  templateUrl: './usermgmt-list.component.html',
  styleUrls: ['./usermgmt-list.component.css']
})
export class usermgmtListComponent implements OnInit {

  usermgmts: Array<any>;
  error: string;

  constructor(private usermgmtsService: usermgmtsService) { }

  ngOnInit() {
    this.usermgmtsService.getAllusermgmts()
      .subscribe(
      data => this.usermgmts = data,
      error => this.error = error.statusText
      );
  }

}

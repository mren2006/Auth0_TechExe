import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usermgmtsService } from '../services/usermgmts.service';
import { NewusermgmtModel } from '../models/new-usermgmt-model';

@Component({
  selector: 'app-usermgmt-add',
  templateUrl: './usermgmt-add.component.html',
  styleUrls: ['./usermgmt-add.component.css']
})
export class usermgmtAddComponent implements OnInit {

  usermgmts: Array<any>;
  error: string;

  constructor(private usermgmtsService: usermgmtsService) { }

  ngOnInit() {
    this.usermgmtsService.addusermgmt()
      .subscribe(
      data => this.usermgmts = data,
      error => this.error = error.statusText
      );
  }
  }



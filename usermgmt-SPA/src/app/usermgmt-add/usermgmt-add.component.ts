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
  
  error: string;
  model = new NewusermgmtModel();

  constructor(private router: Router, private usermgmtsService: usermgmtsService) { }

  onSubmit() {
    this.usermgmtsService.addusermgmt(this.model)
      .subscribe(
        data => this.router.navigate(['/usermgmts']),
      error => this.error = error.statusText
      );

  }

  ngOnInit() {
  }

}

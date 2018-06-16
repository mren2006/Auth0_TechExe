import { Component, OnInit } from '@angular/core';
import { usermgmtsService } from '../services/usermgmts.service';
@Component({
  selector: 'app-usermgmtdelete',
  templateUrl: './usermgmt-delete.component.html',
  styleUrls: ['./usermgmt-delete.component.css']
})
export class usermgmtdeleteComponent implements OnInit {

  usermgmts: Array<any>;
  error: string;

  constructor(private usermgmtsService: usermgmtsService) { }

    ngOnInit() {
      this.usermgmtsService.getUnapprovedusermgmts()
        .subscribe(
        data => this.usermgmts = data,
        error => this.error = error.statusText
        );
    }

    approve(id: number) {
      this.usermgmtsService.approveusermgmt(id)
      .subscribe(
        data => this.usermgmts = this.usermgmts.filter(i => i.id !== id),
        error => this.error = error.statusText
      );

    }

}

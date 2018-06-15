import { Component, OnInit } from '@angular/core';
import { usermgmtsService } from '../services/usermgmts.service';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

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

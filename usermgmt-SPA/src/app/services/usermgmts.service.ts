import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AUTH_CONFIG } from '../auth/auth0-variables';
import 'rxjs/add/operator/map';
import { NewusermgmtModel } from '../models/new-usermgmt-model';

@Injectable()
export class usermgmtsService {

  constructor(public authHttp: AuthHttp) { }

  addusermgmt(model: NewusermgmtModel) {
    return this.authHttp.post(AUTH_CONFIG.apiUrl + '/usermgmts', JSON.stringify(model));
  }

  getAllusermgmts() {
    return this.authHttp.get(AUTH_CONFIG.apiUrl + '/usermgmts')
      .map(res => res.json())
  }

  getUnapprovedusermgmts() {
    return this.authHttp.get(AUTH_CONFIG.apiUrl + '/approvals')
      .map(res => res.json())
  }

  approveusermgmt(id: number) {
    return this.authHttp.put(AUTH_CONFIG.apiUrl + '/approvals/' + id, {})
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AUTH_CONFIG } from '../auth/auth0-variables';
import 'rxjs/add/operator/map';
import { NewusermgmtModel } from '../models/new-usermgmt-model';

@Injectable()
export class usermgmtsService {

  constructor(public authHttp: AuthHttp) { }

  addusermgmt() {
    return this.authHttp.get(AUTH_CONFIG.apiUrl + '/usermgmtadd').map(res => res.json()) ;
  }

  getAllusermgmts() {
    return this.authHttp.get(AUTH_CONFIG.apiUrl + '/usermgmts')
      .map(res => res.json())
  }
/*
 deleteusermgmt() {
    return this.authHttp.delete(AUTH_CONFIG.apiUrl + '/usermgmtdelete', JSON.stringify(model));
    //  .map(res => res.json())
  }
*/
  deleteusermgmt() {
    return this.authHttp.get(AUTH_CONFIG.apiUrl + '/usermgmtdelete/').map(res => res.json());
  }
}

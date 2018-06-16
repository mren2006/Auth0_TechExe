import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';
import { usermgmtListComponent } from './usermgmt-list/usermgmt-list.component';
import { usermgmtAddComponent } from './usermgmt-add/usermgmt-add.component';
import { usermgmtdeleteComponent } from './usermgmt-delete/usermgmt-delete.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: 'usermgmt-add', component: usermgmtAddComponent, canActivate: [AuthGuard] , data: { expectedScopes: ['write:data']}},
  { path: 'usermgmt-list', component: usermgmtListComponent, canActivate: [AuthGuard] , data: { expectedScopes: ['read:data']}},
  { path: 'usermgmt-delete', component: usermgmtdeleteComponent, canActivate: [AuthGuard], data: { expectedScopes: ['delete:data']} },
  { path: '**', redirectTo: '' }
];

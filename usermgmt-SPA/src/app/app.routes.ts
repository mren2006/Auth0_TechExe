import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';
import { usermgmtListComponent } from './usermgmt-list/usermgmt-list.component';
import { usermgmtAddComponent } from './usermgmt-add/usermgmt-add.component';
import { ApprovalComponent } from './approval/approval.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: 'usermgmts/add', component: usermgmtAddComponent, canActivate: [AuthGuard] },
  { path: 'usermgmts', component: usermgmtListComponent, canActivate: [AuthGuard] },
  { path: 'approval', component: ApprovalComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['approve:usermgmts']} },
  { path: '**', redirectTo: '' }
];

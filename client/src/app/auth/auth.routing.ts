import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { NotAuthGuard } from '../shared/notauth.guard';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetConfirmComponent } from './password-reset/password-reset-confirm.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
  { path: 'password-reset', component: PasswordResetComponent, canActivate: [NotAuthGuard] },
  { path: 'password-reset/confirm/:token', component: PasswordResetConfirmComponent, canActivate: [NotAuthGuard] },
  { path: 'confirm-email/:userId/:token', component: ConfirmEmailComponent, canActivate: [NotAuthGuard] }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);

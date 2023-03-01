import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { BillSectionComponent } from './pages/bill-section/bill-section.component';
import { HmComponent } from './pages/hm/hm.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: '' , redirectTo: '/navbar', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent  },
  {path: 'navbar' , component: NavbarComponent  },
  {path: 'user', component: UserComponent , },
  {path: 'menu' , component: MenuComponent },
  {path: 'bill-section', component: BillSectionComponent },
  {path: 'login', component: LoginComponent},
  {path: 'user_view', component: UserViewComponent},
  {path: 'hm' , component: HmComponent } ,
  {path: 'user_edit/:id', component: UserEditComponent },
  {path: '**' , redirectTo: '/navbar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

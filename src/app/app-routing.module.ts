import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		pathMatch: "full",
		redirectTo: 'login'
	},
	{
		path: 'home',
		loadChildren: () => import(`./lazy-load/lazy-load.module`).then(m => m.LazyLoadModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

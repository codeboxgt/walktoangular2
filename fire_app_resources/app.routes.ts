import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeCreateComponent } from './components/heroe-create/heroe-create.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'create', component: HeroeCreateComponent },
    { path: 'edit/:id', component: HeroeEditComponent },
    { path: 'detail/:name/:id', component: HeroeComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

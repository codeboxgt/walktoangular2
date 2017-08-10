import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailComponent } from '../components/historical-character.component';
import { NotFoundComponent  } from '../components/not-found.component';
import { HistoricalCharactersComponent } from '../components/historical-characters.component';
import { DashboardComponent } from '../components/dashboard.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:idCharacter',
        component: CharacterDetailComponent
    },
    {
        path: 'characters',
        component: HistoricalCharactersComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

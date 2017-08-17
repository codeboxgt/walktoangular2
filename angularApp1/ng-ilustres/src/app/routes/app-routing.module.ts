import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoricalCharactersComponent } from '../components/historical-characters.component';
import { CharacterDetailComponent } from '../components/character-detail.component';
import { DashboardComponent } from '../components/dashboard.component';
import { CreateCharacterComponent } from '../components/create-form.component';
import { CharacterDetailNameComponent } from '../components/character-detail-name.component';
import { UpdateCharacterComponent } from '../components/update-form.component';

const routes: Routes = [
    {
        path: 'characters',
        component: HistoricalCharactersComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'character/detail/:name',
        component: CharacterDetailNameComponent
    },
    {
        path: 'detail/:id',
        component: CharacterDetailComponent
    },
    {
        path: 'create',
        component: CreateCharacterComponent
    },
    {
        path: 'update/:name/:id',
        component: UpdateCharacterComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: DashboardComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
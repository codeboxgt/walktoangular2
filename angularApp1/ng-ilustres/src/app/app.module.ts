import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CharacterDetailComponent} from './components/historical-character.component';
import { NotFoundComponent} from './components/not-found.component';
import { DashboardComponent } from './components/dashboard.component';
import { HistoricalCharactersComponent } from './components/historical-characters.component';
import { CharacterPreviewComponent } from './components/character-preview.component';

import { CharacterService } from './services/character.service';

import { AppRoutingModule } from './routes/app-routing.module'

@NgModule({
  imports:      [ 
              BrowserModule, 
              FormsModule,
              HttpModule,
              AppRoutingModule
  ],
  declarations: [ 
      AppComponent, 
      CharacterDetailComponent, 
      NotFoundComponent,
      DashboardComponent,
      HistoricalCharactersComponent,
      CharacterPreviewComponent
   ],
  providers: [CharacterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

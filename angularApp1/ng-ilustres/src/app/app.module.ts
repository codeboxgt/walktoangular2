import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HistoricalCharactersComponent } from './components/historical-characters.component';
import { CharacterDetailComponent } from './components/character-detail.component';
import { DashboardComponent } from './components/dashboard.component';
import { CharacterPreviewComponent } from './components/character-preview.component'
import { CreateCharacterComponent } from './components/create-form.component';
import { CharacterDetailNameComponent } from './components/character-detail-name.component';
import { UpdateCharacterComponent } from './components/update-form.component';

import { CharacterService } from './services/character.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { dtoData } from './classes/data';

import { AppRoutingModule } from './routes/app-routing.module'
import { FileSelectDirective } from 'ng2-file-upload';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  imports:[ 
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            AppRoutingModule,
            BlockUIModule,
            HttpModule
          ],
  declarations: [ 
            AppComponent,
            CharacterDetailComponent,
            HistoricalCharactersComponent,
            DashboardComponent,
            CharacterPreviewComponent,
            CreateCharacterComponent,
            FileSelectDirective,
            CharacterDetailNameComponent,
            UpdateCharacterComponent
          ],
  providers: [
    CharacterService,
    UserService,
    AuthService,
    dtoData
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BindComponent } from './bind/bind.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
    { path: '', redirectTo: '/bind', pathMatch: 'full' },
    { path: 'bind', component: BindComponent },
    { path: 'template', component: TemplateFormsComponent },
    { path: 'reactive', component: ReactiveFormsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

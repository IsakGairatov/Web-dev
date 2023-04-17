import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import {RouterModule} from "@angular/router";
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';
import { VacanciesDeatailComponent } from './vacancies-deatail/vacancies-deatail.component';
import { CompaniesVacanciesComponent } from './companies-vacancies/companies-vacancies.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    StartingPageComponent,
    VacancyListComponent,
    CompaniesDetailComponent,
    VacanciesDeatailComponent,
    CompaniesVacanciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: StartingPageComponent},
      {path: 'companies', component: CompanyListComponent},
      {path: 'vacancies', component: VacancyListComponent},
      {path: 'companies/:cId', component: CompaniesDetailComponent},
      {path: 'vacancies/:vId', component: VacanciesDeatailComponent},
      {path: 'companies/vacancies/:cId', component: CompaniesVacanciesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

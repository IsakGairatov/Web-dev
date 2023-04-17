import { Component } from '@angular/core';
import {COMPANY, Company} from "../Models/Company";
import {ActivatedRoute} from "@angular/router";
import {Vacancy, Vacs} from "../Models/Vacancy";

@Component({
  selector: 'app-companies-vacancies',
  templateUrl: './companies-vacancies.component.html',
  styleUrls: ['./companies-vacancies.component.css']
})
export class CompaniesVacanciesComponent {
  vacs = Vacs;
  comp: Company | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const CompIdfromRout = Number(routeParams.get('cId'));

    this.comp = COMPANY.find(comp => comp.id === CompIdfromRout)
    this.vacs = Vacs.filter((vac) => vac.company === CompIdfromRout)
  }
}

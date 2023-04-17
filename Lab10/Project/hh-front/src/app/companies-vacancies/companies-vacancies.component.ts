import { Component } from '@angular/core';
import {COMPANY, Company} from "../Models/Company";
import {ActivatedRoute} from "@angular/router";
import {Vacancy, Vacs} from "../Models/Vacancy";
import {VacanciesService} from "../vacancies.service";
import {CompaniesService} from "../companies.service";

@Component({
  selector: 'app-companies-vacancies',
  templateUrl: './companies-vacancies.component.html',
  styleUrls: ['./companies-vacancies.component.css']
})
export class CompaniesVacanciesComponent {
  vacs: Vacancy[] | undefined
  comp: Company | undefined;
  constructor(private route: ActivatedRoute, private vacanciesService: VacanciesService, private companyService: CompaniesService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const CompIdfromRout = Number(routeParams.get('cId'));

    this.companyService.getComp(CompIdfromRout).subscribe((data) =>
    this.comp = data)

    this.vacanciesService.getCompVacs(CompIdfromRout).subscribe((data) =>
    this.vacs = data)

  }
}

import { Component } from '@angular/core';
import {COMPANY, Company} from "../Models/Company";
import {ActivatedRoute} from "@angular/router";
import {Vacancy, Vacs} from "../Models/Vacancy";
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-vacancies-deatail',
  templateUrl: './vacancies-deatail.component.html',
  styleUrls: ['./vacancies-deatail.component.css']
})
export class VacanciesDeatailComponent {
  vac: Vacancy | undefined;
  constructor(private route: ActivatedRoute, private vacancyService: VacanciesService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const VacIdfromRout = Number(routeParams.get('vId'));

    this.vacancyService.getVac(VacIdfromRout).subscribe((data) =>
    this.vac = data)
  }
}

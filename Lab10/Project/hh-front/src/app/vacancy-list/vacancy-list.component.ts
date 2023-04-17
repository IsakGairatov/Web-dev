import { Component } from '@angular/core';
import {Vacancy, Vacs} from "../Models/Vacancy";
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent {
    vacns: Vacancy[] | undefined

  constructor(private vacancyService: VacanciesService) {
  }
  ngOnInit() {
      this.vacancyService.getVansList().subscribe((data) =>
      this.vacns = data)
  }

}

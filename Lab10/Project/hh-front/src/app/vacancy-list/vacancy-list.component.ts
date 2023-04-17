import { Component } from '@angular/core';
import {Vacs} from "../Models/Vacancy";

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent {
    vacns = Vacs

}

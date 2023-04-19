import { Component } from '@angular/core';
import {C_FIELDS} from "../Models/Comp_Fields";
import {Vacancy, Vacs} from "../Models/Vacancy";
import {Company, COMPS} from "../Models/Company";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  listOfFields = C_FIELDS
  listOfVacancies = Vacs
  listOfCompanies = COMPS

  CompName(vac: Number): Company | undefined{
    return COMPS.find(comp => comp.id === vac)
  }
}

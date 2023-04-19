import { Component } from '@angular/core';
import {Vacancy, Vacs} from "../Models/Vacancy";
import {ActivatedRoute} from "@angular/router";
import {C_FIELDS, Comp_Field} from "../Models/Comp_Fields";
import {Company, COMPS} from "../Models/Company";

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent {
  vac: Vacancy | undefined;
  filds = C_FIELDS;
  comps = COMPS

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const Vac_id = Number(routeParams.get('v_id'));

    this.vac = Vacs.find(vac => vac.id === Vac_id);
  }

  VacField(f_id: Number): Comp_Field | undefined {
     return this.filds.find(fd => fd.id === f_id);
  }

  VacComp(c_id: Number): Company | undefined {
    return this.comps.find(comp => comp.id === c_id)
  }
}

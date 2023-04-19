import { Component } from '@angular/core';
import {Company, COMPS} from "../Models/Company";
import {ActivatedRoute} from "@angular/router";
import {Vacancy, Vacs} from "../Models/Vacancy";
import {C_FIELDS, Comp_Field} from "../Models/Comp_Fields";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
  comp: Company | undefined;
  vacans: Vacancy[] | undefined;
  field: Comp_Field | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const Comp_id = Number(routeParams.get('c_id'));

    this.comp = COMPS.find(c => c.id === Comp_id)
    this.vacans = Vacs.filter(v => v.company === Comp_id)
    this.field = C_FIELDS.find(f => f.id === this.comp?.CompanyFiels)
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {COMPANY, Company} from "../Models/Company";

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.css']
})
export class CompaniesDetailComponent {
  comp: Company | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const CompIdfromRout = Number(routeParams.get('cId'));

    this.comp = COMPANY.find(comp => comp.id === CompIdfromRout)
  }
}

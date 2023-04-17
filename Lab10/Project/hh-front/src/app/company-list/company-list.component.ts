import { Component } from '@angular/core';
import {COMPANY, Company} from "../Models/Company";
import {CompaniesService} from "../companies.service";


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  comps: Company[] | undefined
  constructor(private companyService: CompaniesService) {

  }
  ngOnInit() {
      this.companyService.getCompList().subscribe((data) =>
            this.comps = data
      )
  }
}

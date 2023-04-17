import { Component } from '@angular/core';
import {COMPANY, Company} from "../Models/Company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  comps = COMPANY;

}

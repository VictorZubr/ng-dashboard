import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs/operators";
import {ChartModel} from "../model/chart-model";
import {CATEGORIES, VALUES} from "../model/const";

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private api: ApiService) { }

  getUsersData() {
    return this.api.getUsersData().pipe(
      map(response => new ChartModel(response, CATEGORIES, VALUES))
    )
  }
}

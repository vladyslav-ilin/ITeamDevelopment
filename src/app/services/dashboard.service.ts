import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IGraphState} from "../components/graph/state/graph.state";
import {IDashboard} from "../../dtos/dashboard";
import {IGraph} from "../../dtos/graph";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private userReports: string = '/api/userassessments';
  private userReportsGraph: string = '/api/userassessments/graph';

  constructor(private http: HttpClient) { }

  getDashboard(token: string) {
    const headers = new HttpHeaders({
      'X-Token': token
    });
    return this.http.get<IDashboard[]>(`${environment.apiUrl}${this.userReports}`, {headers})
  }

  getGraph(id: number | null, token: string) {
    const headers = new HttpHeaders({
      'X-Token': token
    });
    return this.http.get<IGraph>(`${environment.apiUrl}${this.userReportsGraph}/?id=${id}`, {headers})
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContaCorrente } from '../models/Conta-Corrente';

@Injectable({
  providedIn: 'root'
})
export class ContaCorrenteService {
  private baseUrl = `${environment.apiUrl}/contaCorrente`;

  constructor(private http: HttpClient) {}

  list(): Observable<ContaCorrente[]> {
    return this.http.get<ContaCorrente[]>(`${this.baseUrl}/list`);
  }
}

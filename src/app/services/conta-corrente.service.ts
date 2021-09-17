import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContaCorrente } from '../models/Conta-Corrente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContaCorrenteService {
  private baseUrl = `${environment.apiUrl}/contaCorrente`;

  constructor(private http: HttpClient) {}

  create(contaCorrente: ContaCorrente): Observable<ContaCorrente> {
    return this.http.post<ContaCorrente>(
      `${this.baseUrl}/create`,
      contaCorrente
    );
  }

  list(): Observable<ContaCorrente[]> {
    return this.http.get<ContaCorrente[]>(`${this.baseUrl}/list`);
  }

  findById(id: number): Observable<ContaCorrente> {
    return this.http.get<ContaCorrente>(`${this.baseUrl}/findById/${id}`);
  }

  update(contaCorrente: ContaCorrente): Observable<ContaCorrente> {
    return this.http.post<ContaCorrente>(
      `${this.baseUrl}/update`,
      contaCorrente
    );
  }

  delete(id: number): Observable<ContaCorrente> {
    return this.http.delete<ContaCorrente>(`${this.baseUrl}/delete/${id}`);
  }
}

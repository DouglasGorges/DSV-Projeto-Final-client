import { Produto } from './../models/Produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = `${environment.apiUrl}/produto`;

  constructor(private http: HttpClient) {}

  list(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseUrl}/list`);
  }
}
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Categoria } from './../models/Categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private baseUrl = `${environment.apiUrl}/categoria`;

  constructor(private http: HttpClient) {}

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      `${this.baseUrl}/create`,
      categoria
    );
  }

  list(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/list`);
  }

  update(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      `${this.baseUrl}/update`,
      categoria
    );
  }

  delete(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.baseUrl}/delete/${id}`);
  }
}

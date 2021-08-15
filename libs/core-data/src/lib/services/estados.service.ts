import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Estado } from "@estados/api-interfaces";

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})

export class EstadosService {
  model = 'estados';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Estado[]>(this.getUrl());
  }

  find(estadoId: string) {
    return this.httpClient.get<Estado>(this.getUrlById(estadoId));
  }

  create(estados: Estado) {
    return this.httpClient.post<Estado>(this.getUrl(), estados);
  }

  update(estados: Estado) {
    return this.httpClient.patch<Estado>(this.getUrlById(estados.id), estados);
  }

  delete({ id }: Estado) {
    return this.httpClient.delete<Estado>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}

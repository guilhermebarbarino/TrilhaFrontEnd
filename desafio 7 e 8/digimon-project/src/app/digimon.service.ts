import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  private apiUrl = environment.digimonApiUrl;

  constructor(private http: HttpClient) { }

  getAllDigimons(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getDigimonByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name/${name}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404 || error.status === 400) {
      return throwError('Digimon não encontrado');
    }
    return throwError('Ocorreu um erro ao buscar o Digimon');
  }

  getDigimonByLevel(level: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/level/${level}`);
  }
}

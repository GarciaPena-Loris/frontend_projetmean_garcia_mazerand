import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bien} from '../model/bien.interface';

@Injectable({
  providedIn: 'root',
})
export class BienService {
  private apiUrl = 'https://backend-projetmean-b6bb1524bb43.herokuapp.com/api';

  constructor(private http: HttpClient) {
  }

  getAllBiens(): Observable<Bien[]> {
    const body = {"criteria": ""}
    return this.http.post<Bien[]>(this.apiUrl + '/biens/search', body);
  }

  getBienById(id: number): Observable<Bien> {
    return this.http.get<Bien>(this.apiUrl + '/biens/' + id);
  }

  getBienWithCriteria(criteria: any): Observable<Bien[]> {
    return this.http.post<Bien[]>(this.apiUrl + '/biens/search', criteria);
  }
}

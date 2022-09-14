import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {


  url: string = "http://localhost:3000/PaymentDetails";

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }
  postCard(data: any) {
    return this.http.post(this.url, data);
  }
  DeleteCard(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  GetCard(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  UpdateCard(id: number,data: any) {
    return this.http.put(`${this.url}/${id}`,data);
  }
}
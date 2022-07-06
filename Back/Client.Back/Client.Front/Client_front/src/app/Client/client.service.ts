import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IClient } from "./client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clients = new BehaviorSubject<IClient[]>([]);

  constructor(private http: HttpClient) {
  }

  getClients(): void {
    this.http.get("https://localhost:44317/api/Clients")
    .subscribe(data => this.clients.next(data as IClient[]))
 }

 searchClients(query: string): void {
  this.http.get(`https://localhost:44317/api/Clients/${query}`)
  .subscribe(data => this.clients.next([data as IClient]))
}
}

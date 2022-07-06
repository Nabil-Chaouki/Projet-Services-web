import { IClient } from './Client/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from './Client/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client_front';
  showFormul: Boolean = false;
  clients: IClient[] = [];
  searchQuery: string = "";

  constructor(private clientService: ClientService) {}

  public ngOnInit(): void {
      this.clientService.getClients();
      this.clientService.clients.subscribe(data => {
        this.clients = data
        console.log(data);
      });
  }

  public toggleFormulShow(): void {
    this.showFormul =! this.showFormul;
  }

  public onSearchInputChange(): void {
    this.clientService.searchClients(this.searchQuery);
  }
}

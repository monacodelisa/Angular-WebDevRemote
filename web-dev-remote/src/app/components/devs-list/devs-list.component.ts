import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Dev } from '../../models/dev';

import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-devs-list',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './devs-list.component.html',
  styleUrl: './devs-list.component.scss'
})
export class DevsListComponent implements OnInit{
  developers: Dev[] = [];

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDevs().subscribe( data => {
      this.developers = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service'; 
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
        imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    
})
export class DashboardComponent implements OnInit {
  data: any[] = []; //array to hold fetched data

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;  // Store the fetched data in the data array
      },
      (error) => {
        console.error('Error fetching data:', error);  // Handle error
      }
    );
  }
}

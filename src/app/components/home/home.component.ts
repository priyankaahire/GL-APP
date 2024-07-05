import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ReconData {
  reconId: number;
  reconName: string;
  source: string;
  target: string;
  status: string;
  createdBy: string;
  createdOn: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource: MatTableDataSource<ReconData>;
  displayedColumns: string[] = [
    'reconId',
    'reconName',
    'source',
    'target',
    'status',
    'createdBy',
    'createdOn',
  ];

  constructor() {
    // Example data (replace with actual data retrieval logic)
    const mockData: ReconData[] = [
      {
        reconId: 1,
        reconName: 'Recon 1',
        source: 'Source A',
        target: 'Target A',
        status: 'Pending',
        createdBy: 'User 1',
        createdOn: new Date(),
      },
      {
        reconId: 2,
        reconName: 'Recon 2',
        source: 'Source B',
        target: 'Target B',
        status: 'Completed',
        createdBy: 'User 2',
        createdOn: new Date(),
      },
      // Add more data as needed
    ];

    this.dataSource = new MatTableDataSource(mockData);
  }

  ngOnInit(): void {
    // Initialize any additional logic
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

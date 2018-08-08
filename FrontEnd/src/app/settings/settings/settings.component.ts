import { Component, OnInit } from '@angular/core';
import {MessageBoxDialog} from 'eds-angular4';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-record-viewer',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  tableData: any[] = [
    {id: 1, name: 'John Smith', description: 'Senior consultant'},
    {id: 2, name: 'Jane Doe', description: 'General practitioner'},
    {id: 3, name: 'Dave Jones', description: 'Hospital porter'},
    {id: 4, name: 'Doris Jackson', description: 'Surgery receptionist'}
  ];

  selection: any = this.tableData[2];

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  showDialog() {
    MessageBoxDialog.open(this.modal, 'Delete user', 'Are you sure that you want to delete this user?', 'Delete user', 'Cancel');
  }
}

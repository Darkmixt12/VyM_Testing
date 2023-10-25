import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Factura } from 'src/models/factura';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input()
  dataSourceChild = new MatTableDataSource<Factura>


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceChild.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceChild.paginator) {
      this.dataSourceChild.paginator.firstPage();
    }
  }


}

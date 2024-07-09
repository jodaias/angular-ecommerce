import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  @Input() showModal: boolean = false;
}

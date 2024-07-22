import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxSpinnerService, NgxSpinnerModule } from "ngx-spinner";

@Component({
    selector: 'loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: ['./loading-spinner.component.css'],
    standalone: true,
    imports: [NgxSpinnerModule]
})
export class LoadingSpinnerComponent {
  @Input() showModal: boolean = false;
}

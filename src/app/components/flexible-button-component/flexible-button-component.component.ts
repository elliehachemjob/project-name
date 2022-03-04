import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flexible-button-component',
  templateUrl: './flexible-button-component.component.html',
  styleUrls: ['./flexible-button-component.component.css'],
})
export class FlexibleButtonComponentComponent implements OnInit {
  @Input() propsTest = '';

  constructor() {}

  ngOnInit(): void {}
}

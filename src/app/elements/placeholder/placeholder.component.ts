import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true; // default to value of true
  @Input() lines = 3; // default to value of 3

  constructor() {}

  ngOnInit(): void {}
}

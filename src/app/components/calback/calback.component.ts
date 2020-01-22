import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-calback',
  templateUrl: './calback.component.html',
  styles: []
})
export class CalbackComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

}

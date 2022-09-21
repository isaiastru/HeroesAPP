import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/heroes/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.auth.login().subscribe((resp) => {
      console.log(resp);

      if (resp.id) {
        this.router.navigate(['./heroes/listado']);
      }
    });
  }
}

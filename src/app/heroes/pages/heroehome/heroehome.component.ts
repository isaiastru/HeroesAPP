import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/authinterfaces';

@Component({
  selector: 'app-heroehome',
  templateUrl: './heroehome.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HeroehomeComponent implements OnInit {
  get auth(): Auth {
    return { ...this.authServie.auth };
  }
  constructor(private route: Router, private authServie: AuthService) {}
  ngOnInit(): void {}

  salir() {
    this.route.navigate(['./auth/login']);
  }
}

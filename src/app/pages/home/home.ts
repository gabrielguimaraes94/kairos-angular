import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [RouterLink],
  styleUrls: ['./home.css']
})
export class Home {}

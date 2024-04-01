import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeDirectiveDirective } from '../Directives/home-directive.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HomeDirectiveDirective,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}

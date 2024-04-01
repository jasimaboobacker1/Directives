import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone:true,
  imports:[RouterOutlet]
})
export class DetailsComponent implements OnInit {
  Details: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name') ?? '';
    const age = this.route.snapshot.paramMap.get('age') ?? '';
    const birth = this.route.snapshot.paramMap.get('birthdate') ?? '';
    const occupation = this.route.snapshot.paramMap.get('occupation') ?? '';
    const spouse = this.route.snapshot.paramMap.get('spouse') ?? '';
    const email = this.route.snapshot.paramMap.get('email') ?? '';

    this.Details = { name,age,birth,occupation,spouse,email };
    console.log(this.Details);
    
  }
}
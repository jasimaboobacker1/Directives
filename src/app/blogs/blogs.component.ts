import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  constructor(private router:Router){}



   blogDetails = [
    {
      id: 1,
      name: "Emily Johnson",
      birthdate: "1996-03-15",
      age: 28,
      occupation: "Travel Blogger",
      spouse: "Michael Johnson",
      favoriteDestination: "Bali",
      email: "emily@example.com",
      title: "Wanderlust Adventures",
      blog: "I recently embarked on a soul-stirring journey through the picturesque countryside of Italy, where each vineyard-clad hill and ancient cobblestone street seemed to whisper tales of centuries past. From the vibrant bustle of Florence to the serene beauty of Tuscany's rolling hills, Italy's landscapes painted a canvas of wonder and awe. My heart danced with joy as I sampled the rich flavors of Italian cuisine, each dish telling a story of its own. Stay tuned as I weave these unforgettable experiences into captivating stories on my blog, sharing the magic of Italy with the world!"
    },
    {
      id: 2,
      name: "John Doe",
      birthdate: "1980-05-20",
      age: 42,
      occupation: "Explorer",
      spouse: "Jane Doe",
      favoriteDestination: "Mount Everest",
      email: "john@example.com",
      title: "Adventures of John",
      blog: "Mount Everest, the pinnacle of adventure, stood majestically before me, a beacon of my relentless spirit and determination. As I embarked on the arduous journey to conquer this formidable peak, each step brought me closer to my dream and further from the comforts of the world below. The icy winds and treacherous terrain tested my limits, but my resolve remained unshaken. Join me on this epic adventure as I push beyond boundaries and embrace the challenge of a lifetime, scaling the heights of Mount Everest!"
    },
    {
      id: 3,
      name: "Alice Smith",
      birthdate: "1992-12-10",
      age: 30,
      occupation: "Digital Nomad",
      spouse: "Noah Smith",
      favoriteDestination: "Tokyo",
      email: "alice@example.com",
      title: "Nomadic Tales",
      blog: "Tokyo, a city where ancient tradition meets futuristic innovation, cast its spell on me from the moment I arrived. The bustling streets, adorned with neon lights and traditional lanterns, offered a glimpse into Japan's rich culture and heritage. From tranquil shrines nestled among skyscrapers to bustling markets overflowing with culinary delights, Tokyo is a melting pot of experiences waiting to be savored. Join me as I navigate this vibrant city, sharing my encounters and discoveries as a digital nomad on the go!"
    },
    {
      id: 4,
      name: "Michael Brown",
      birthdate: "1988-08-25",
      age: 33,
      occupation: "Adventure Photographer",
      spouse: "Sarah Brown",
      favoriteDestination: "Patagonia",
      email: "michael@example.com",
      title: "Patagonian Dreams",
      blog: "Patagonia, a land of untamed beauty and rugged wilderness, captured my heart with its awe-inspiring landscapes and boundless adventure. As an adventure photographer, I set out to capture the essence of this pristine wilderness, where towering peaks pierce the sky and glaciers glisten in the sunlight. Each photograph tells a story of Patagonia's raw and untouched beauty, inviting you to embark on a visual journey through this enchanting land. Join me as I uncover the hidden gems of Patagonia and share its breathtaking beauty with the world!"
    },
    {
      id: 5,
      name: "Sophia Wilson",
      birthdate: "1990-04-12",
      age: 32,
      occupation: "Food Traveler",
      spouse: "David Wilson",
      favoriteDestination: "Italy",
      email: "sophia@example.com",
      title: "Culinary Journeys",
      blog: "Italy, a country renowned for its culinary excellence, beckoned me with the promise of gastronomic delights and culinary adventures. From the vineyards of Tuscany to the bustling markets of Rome, Italy's culinary landscape is a celebration of flavors and traditions. Join me as I explore the diverse culinary traditions of Italy, sharing the stories behind each dish and the passion that fuels my culinary adventures!"
    }
    // Add more entries here
  ];
   

  view(item: any) {
    this.router.navigate(['/blogs/details', item.name, item.birthdate, item.age, item.occupation, item.spouse, item.email]);
  }
  
  
  

}

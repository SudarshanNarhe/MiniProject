import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})

export class UserPageComponent {

    products:{name:string, description:string,image:string, price:string}[] =[
    {
      name: 'Xiaomi Pad 6',
      description: 'Xiaomi Pad 6 having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet1.jpg',
      price: '28,000'
    },
    {
      name: 'Samsung',
      description: 'Samsung having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet2.jpg',
      price: '62,000'
    },
    {
      name: 'Asus',
      description: 'Asus having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet3.jpg',
      price: '34,000'
    },
    {
      name: 'Honor',
      description: 'Honor having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet4.jpg',
      price: '45,000'
    },
    {
      name: 'Xiaomi',
      description: 'Xiaomi having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet5.jpg',
      price: '57,000'
    },
    {
      name: 'Vivo',
      description: 'Vivo having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet6.jpg',
      price: '25,000'
    },
    {
      name: 'Samsung',
      description: 'Samsung having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet7.jpg',
      price: '45,000'
    },
    {
      name: 'Apple',
      description: 'Apple having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet8.jpg',
      price: '1,12,000'
    },
    {
      name: 'Lenovo',
      description: 'Lenovo having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet9.jpg',
      price: '45,000'
    },
    {
      name: 'Oppo',
      description: 'Oppo having Snapdragon 870 Octa-Core Processor',
      image: '/assets/Tablet10.jpg',
      price: '30,000'
    }
  ];

}

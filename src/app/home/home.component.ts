import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  info = new FormGroup({
    image: new FormControl('', Validators.required),
    marke: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    petrol: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });
  cars = [
    {
      marke: 'BMW',
      model: 'X6',
      petrol: 'Diesel',
      year: '2016',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      marke: 'Porsche',
      model: 'Cayenne',
      petrol: 'Diesel',
      year: '2018',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      marke: 'Citroen',
      model: 'C5',
      petrol: 'Benzin',
      year: '2021',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BOz9caa33b3gGSymP4FngiJWawRbPpG_yA&usqp=CAU',
    },
    {
      marke: 'Audi',
      model: 'RS7',
      petrol: 'Benzin',
      year: '2019',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4e3k5xQxhc47beUWf7OE8g3kX1ukPEp_UQ&usqp=CAU',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  clearForm() {}
  onSubmit() {
    if (this.info.valid) {
      var a = this.info.value;
      this.cars.push(a);
      this.info.reset();
    }
  }
}

import { CardService } from './../services/card.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { card } from '../models/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-generated',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './card-generated.component.html',
  styleUrl: './card-generated.component.css',
})
export class CardGeneratedComponent {
  formcard!: FormGroup;
  isSaveInProgess: boolean = false;

  constructor(private fb: FormBuilder, private cardService: CardService) {
    this.formcard = fb.group({
      productId: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('^[0-9]{6}$'),
        ],
      ],
      cardHolderName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  createCard() {
    if (this.formcard.valid) {
      this.isSaveInProgess = true;
      const cardData: card = this.formcard.value;
      this.cardService.create(cardData).subscribe({
        next: (response) => {
          console.log('Card created successfully:', response);
          alert('Card created successfully!');
          this.formcard.reset();
        },
        error: (err) => {
          console.error('Error creating card:', err);
          alert('There was an error creating the card.');
        },
        complete: () => {
          this.isSaveInProgess = false;
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}

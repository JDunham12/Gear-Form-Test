import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {GearService} from '../../services/gear.service';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-gear-card',
  imports: [MatCard, ReactiveFormsModule, MatHint, MatSelect, MatOption, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatCardTitle, MatCardContent, MatCardHeader],
  providers: [provideNativeDateAdapter()],
  templateUrl: './gear-card.component.html',
  standalone: true,
  styleUrl: './gear-card.component.css'
})
export class GearCardComponent implements OnInit{
  @Input() title!:string;
  bikeList: string[] = []
  tripForm = new FormGroup({
    date : new FormControl(''),
    bike : new FormControl(''),
    mileage : new FormControl('')
  });

  constructor(private gearService:GearService) {
  }

  ngOnInit() {
    this.bikeList = this.gearService.getAllBikeNames()
  }

}

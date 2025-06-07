import {Component, OnInit} from '@angular/core';
import { GearCardComponent } from '../gear-card/gear-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { GearCardInput } from '../../model/gear-card-input';
import { GearService } from '../../services/gear.service';

@Component({
  selector: 'app-home',
  imports: [GearCardComponent, MatGridListModule, CommonModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  gearInputList: GearCardInput[] = [];


  constructor(private gearService : GearService) {
  }

  ngOnInit() {
    this.gearInputList = this.gearService.getAllInputs();
  }

}

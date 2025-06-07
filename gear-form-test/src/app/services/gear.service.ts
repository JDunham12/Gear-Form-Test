import { Injectable } from '@angular/core';
import { GearCardInput } from '../model/gear-card-input';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor() { }

  private cardInputs: GearCardInput[] = [
    {
      title: "Trip #1"
    },
    {
      title: "Trip #2"
    },
    {
      title: "Trip #3"
    },
    {
      title: "Trip #4"
    }
  ];

  private bikeNames: string[] = ["Bearclaw Thunderhawk", "Kestrel MXZ", "Salsa Warbird"];

  getAllBikeNames(): string[] {
    return this.bikeNames;
  }

  getAllInputs(): GearCardInput[] {
    return  this.cardInputs;
  }
}

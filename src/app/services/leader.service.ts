import { Injectable } from '@angular/core';
import {Leader} from '../shared/Leader';
import {LEADERS} from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }
  getFeaturedLeader(): Promise<Leader>{

    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }

  constructor() { }
}

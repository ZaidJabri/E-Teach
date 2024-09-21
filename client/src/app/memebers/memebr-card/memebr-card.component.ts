import { Component, input } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-memebr-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './memebr-card.component.html',
  styleUrl: './memebr-card.component.css'
})
export class MemebrCardComponent {
  member = input.required<Member>();
}

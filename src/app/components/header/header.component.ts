import { Component } from '@angular/core';
import { LOGO } from '../../constants/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logo: string = LOGO

}

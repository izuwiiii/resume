import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { ME_URL } from '../../constants/config';

// register Swiper custom elements
register();

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  me: string = ME_URL

}

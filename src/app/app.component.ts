// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'myngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    throw new Error('Mtestehahahlemented.');
  }

  ngOnInit(): void {
    throw new Error('Mtestehahahlemented.');
  }

  title = 'myngapp';

  @Input() baba = '';

  teste() {
    console.log(123);
  }
}

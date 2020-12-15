@Component({
  selector: 'clr-form-demo',
  templateUrl: './form-demo.html',
})
export class DatepickerReactiveFormsDemo {
  dateForm = new FormGroup({ date: new FormControl() });
}

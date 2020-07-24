@Component({})
export class OfficeLocations {
  constructor(private locationService: LocationService) {}

  locations$: Observable<string[]>;
  loading = false;

  fetchLocations() {
    this.loading = true;
    this.locations$ = this.locationService.getLocations().pipe(tap(() => (this.loading = false)));
  }
}

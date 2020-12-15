@Injectable()
export class MyCommonStringsService implements ClrCommonStrings {
  constructor(@Inject(LOCALE_ID) locale: string, server: MyServer, commonStrings: ClrCommonStringsService) {
    // Imagine this service loads a JSON object of strings for a locale
    server.fetchTexts(locale).subscribe(texts => {
      // Pass the new localization strings to the service
      commonStrings.localize(texts);
    });
  }
}

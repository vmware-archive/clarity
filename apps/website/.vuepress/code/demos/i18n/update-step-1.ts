@NgModule({
  imports: [],
  declarations: [],
  providers: [{ provide: ClrCommonStrings, useClass: MyCommonStringsService }],
})
export class AppModule {}

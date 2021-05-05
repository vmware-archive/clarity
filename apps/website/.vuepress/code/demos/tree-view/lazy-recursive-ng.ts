@Component({})
export class FileBrowser implements OnInit {
  constructor(private folderService: FolderService) {}

  root$: Observable<File[]>;

  getChildren = (folder: File) => {
    if (folder.isFolder) {
      return this.folderService.getFiles(folder);
    } else {
      return null;
    }
  };

  ngOnInit(): void {
    this.root$ = this.folderService.getFiles('/');
  }
}

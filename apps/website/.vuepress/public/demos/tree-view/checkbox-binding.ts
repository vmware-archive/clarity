@Component({
  selector: '...',
  templateUrl: '...',
})
export class Permissions {
  permissions: any = [
    {
      type: 'Authenticated Users',
      rights: [
        {
          name: 'Read',
          enable: true,
        },
        {
          name: 'Modify',
          enable: true,
        },
        {
          name: 'Create',
          enable: false,
        },
        {
          name: 'Delete',
          enable: false,
        },
      ],
    },
    {
      type: 'Owners',
      rights: [
        {
          name: 'Read',
          enable: true,
        },
        {
          name: 'Modify',
          enable: true,
        },
        {
          name: 'Create',
          enable: true,
        },
        {
          name: 'Delete',
          enable: true,
        },
      ],
    },
  ];
}

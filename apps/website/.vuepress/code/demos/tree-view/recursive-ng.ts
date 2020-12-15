export class RecursiveSelection {
  root = [
    {
      name: 'src',
      selected: ClrSelectedState.INDETERMINATE,
      files: [
        {
          name: 'app',
          selected: ClrSelectedState.INDETERMINATE,
          files: [
            {
              name: 'app.component.html',
              selected: ClrSelectedState.UNSELECTED,
            },
            {
              name: 'app.component.ts',
              selected: ClrSelectedState.UNSELECTED,
            },
            {
              name: 'app.module.ts',
              selected: ClrSelectedState.SELECTED,
            },
            {
              name: 'app.routing.ts',
              selected: ClrSelectedState.UNSELECTED,
            },
          ],
        },
        {
          name: 'environments',
          selected: ClrSelectedState.SELECTED,
          files: [
            {
              name: 'environments.prod.ts',
              selected: ClrSelectedState.SELECTED,
            },
            {
              name: 'environment.ts',
              selected: ClrSelectedState.SELECTED,
            },
          ],
        },
        {
          name: 'index.html',
          selected: ClrSelectedState.UNSELECTED,
        },
        {
          name: 'main.ts',
          selected: ClrSelectedState.UNSELECTED,
        },
      ],
    },
    {
      name: 'package.json',
      selected: ClrSelectedState.UNSELECTED,
    },
    {
      name: 'tsconfig.json',
      selected: ClrSelectedState.UNSELECTED,
    },
  ];

  getChildren = folder => folder.files;
}

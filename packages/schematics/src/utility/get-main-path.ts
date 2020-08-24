export function getMainPath(config: any, projectName: string): string {
  const project = config.projects[projectName];
  return project.architect.build.options.main;
}

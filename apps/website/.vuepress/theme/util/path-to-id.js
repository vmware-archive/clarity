export function pathToId(path) {
  return path.replace('/', '').replace(/\//g, '-').replace(/-$/, '');
}

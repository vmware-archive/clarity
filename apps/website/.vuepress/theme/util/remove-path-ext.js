export function removePathExt(path) {
  const pathArr = path.split('.');
  if (pathArr.length < 2) {
    return path;
  }
  pathArr.pop();
  return pathArr.join('');
}

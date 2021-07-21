/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function filter<T>(list: T[], key: string, term: string) {
  return [...list].filter(i => (i as any)[key].toLocaleLowerCase().includes(term.toLocaleLowerCase()));
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function sortStrings<T>(list: T[], key: string, sortType: 'none' | 'ascending' | 'descending') {
  if (sortType === 'ascending') {
    return list.sort((a: any, b: any) => a[key].localeCompare(b[key]));
  }

  if (sortType === 'descending') {
    return list.sort((a: any, b: any) => a[key].localeCompare(b[key])).reverse();
  }

  return list;
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function swapBetweenLists<T extends { id: string }>(
  targetList: T[],
  fromList: T[],
  detail: { from: T; target: T }
) {
  const itemId = fromList.find(i => i.id === detail.from.id) as T;
  const targetId = targetList.find(i => i.id === detail.target.id) as T;
  const item = fromList.splice(fromList.indexOf(itemId), 1)[0];
  const targetIndex = targetList.indexOf(targetId);
  targetIndex === -1 ? targetList.push(item) : targetList.splice(targetIndex, 0, item);

  return { targetList: [...targetList], fromList: [...fromList] };
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function paginate<T>(arr: T[], size: number) {
  return [...arr].reduce((acc, val, i) => {
    const idx = Math.floor(i / size);
    const page = acc[idx] || (acc[idx] = []);
    page.push(val);
    return acc;
  }, [] as T[][]);
}

/**
 * @demo
 * @deprecated
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function swapItems<T>(target: T & { id: any }, src: T & { id: any }, list: ({ id: any } & T)[]) {
  const data = [...list];
  const srcIndex = data.findIndex(i => `${i.id}` === `${src.id}`);
  const srcItem = data.splice(srcIndex, 1)[0];
  const targetIndex = data.findIndex(i => `${i.id}` === `${target.id}`);
  targetIndex === -1 ? data.push(srcItem) : data.splice(targetIndex, 0, srcItem);
  return data;
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function insertBefore(fromIndex: number, targetIndex: number, list: any[]) {
  const listCopy = [...list];
  const itemRemoved = listCopy.splice(fromIndex, 1);
  const offset = fromIndex + 1 < targetIndex ? -1 : 0;
  listCopy.splice(targetIndex + offset, 0, itemRemoved[0]);
  return listCopy;
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function parseCSV(text: string) {
  const arr = text
    .trim()
    .split('\n')
    .map(i => i.split(','));

  const csv = {
    columns: arr[0],
    rows: arr.slice(1).map(cells => cells.map(c => c.trim())),
  };

  return csv;
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function exportElementsToCSV(columnElements: NodeListOf<HTMLElement>, rowElements: NodeListOf<HTMLElement>) {
  const columns = Array.from(columnElements).map(c => c.textContent?.trim());
  const rows = Array.from(rowElements).map(r =>
    Array.from(r.children).map(c => `${c.textContent}${c.querySelector('input')?.value}`)
  );
  return `${columns.join(',')}\n${rows.map(cells => `${cells.map(c => c.trim()).join(',')}`).join('\n')}`;
}

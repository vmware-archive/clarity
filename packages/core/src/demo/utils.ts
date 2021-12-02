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
export function swapBetweenLists<T>(
  targetList: (T & { id: string })[],
  fromList: (T & { id: string })[],
  detail: { from: { id: string }; target: { id: string } }
) {
  const item = fromList.splice(fromList.indexOf(fromList.find(i => i.id === detail.from.id)), 1)[0];
  const targetIndex = targetList.indexOf(targetList.find(i => i.id === detail.target.id));
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
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function swapItems<T>(target: T & { id: any }, src: T & { id: any }, list: ({ id: any } & T)[]) {
  const data = [...list];
  const srcIndex = data.findIndex(i => `${i.id}` === `${src.id}`);
  const targetIndex = data.findIndex(i => `${i.id}` === `${target.id}`);
  const srcItem = data.splice(srcIndex, 1)[0];
  targetIndex === -1 ? data.push(srcItem) : data.splice(targetIndex, 0, srcItem);
  return data;
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
  const columns = Array.from(columnElements).map(c => c.textContent.trim());
  const rows = Array.from(rowElements).map(r =>
    Array.from(r.children).map(c => `${c.textContent}${c.querySelector('input')?.value}`)
  );
  return `${columns.join(',')}\n${rows.map(cells => `${cells.map(c => c.trim()).join(',')}`).join('\n')}`;
}

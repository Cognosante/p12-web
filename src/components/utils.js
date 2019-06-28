export const isFunction = fn => fn && {}.toString.call(fn) === '[object Function]';
export const isString = s => typeof s === 'string' || s instanceof String;

export const union = (l1, l2) => {
  const a = new Set(l1 || []);
  const b = new Set(l2 || []);
  const result = new Set([...a, ...b]);
  return [...result];
};

export const intersection = (l1, l2) => {
  const a = new Set(l1 || []);
  const b = new Set(l2 || []);
  const result = new Set([...a].filter(x => b.has(x)));
  return [...result];
};

export const difference = (l1, l2) => {
  const a = new Set(l1 || []);
  const b = new Set(l2 || []);
  const result = new Set([...a].filter(x => !b.has(x)));
  return [...result];
};

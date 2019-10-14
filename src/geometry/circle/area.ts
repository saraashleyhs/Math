export function area(r: number) {
  if (r < 0) throw new Error('Radius must be greater than 0!');
  if (typeof r !== 'number') throw new Error('Radius must be a number!');
  return Math.PI * r * r;
}

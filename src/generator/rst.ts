import { writeFileSync } from 'fs';

const DESTINATION_DIR = `${__dirname}/../../docs/source`;

export function generateFile(name: string, title: string, content: string) {
  const buffer = [title, '='.repeat(title.length), '', content].join('\n');

  writeFileSync(`${DESTINATION_DIR}/${name}.rst`, buffer);
}

export function createToc(
  items: string[],
  maxdepth: number = 1,
  caption?: string,
) {
  const buffer = ['.. toctree::', '  :glob:', `  :maxdepth: ${maxdepth}`];

  if (caption) {
    buffer.push(`  :caption: ${caption}`);
  }

  buffer.push('');

  for (const item of items) {
    buffer.push(`  ${item}`);
  }

  return buffer.join('\n');
}

export function createTable(headers: string[], rows: string[][]): string {
  const combined = [headers, ...rows];
  const columnCounts: number[] = [];
  const maxColumnCount = combined.reduce(
    (previous, current) => Math.max(previous, current.length),
    0,
  );

  for (let i = 0; i < maxColumnCount; i++) {
    columnCounts.push(
      combined.reduce(
        (previous, current) => Math.max(previous, (current[i] || []).length),
        0,
      ),
    );
  }

  const renderColumn = (row: string[]): string =>
    row.map((col, i) => col.padEnd(columnCounts[i], ' ')).join('  ');

  const border = columnCounts.map(count => '='.repeat(count)).join('  ');

  let buffer = [border];

  if (headers.length > 0) {
    buffer = [...buffer, renderColumn(headers), border];
  }

  buffer = [...buffer, ...rows.map(row => renderColumn(row)), border];

  return buffer.filter(v => v.trim().length > 0).join('\n');
}

export function convertMarkdownHyperlinks(markdown: string): string {
  const regex = /\[(.*?)\]\(((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g;
  let converted = markdown;
  let match: string[] | null;

  // tslint:disable-next-line: no-conditional-assignment
  while ((match = regex.exec(markdown))) {
    const [full, label, url] = match;
    converted = converted.replace(full, `\`${label} <${url}>\`_`);
  }

  return converted;
}

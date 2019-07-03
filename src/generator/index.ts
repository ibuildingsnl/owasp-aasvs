import fs from 'fs';
import { loadChapters } from './csv-loader';
import {
  convertMarkdownHyperlinks,
  createTable,
  createToc,
  generateFile,
} from './rst';
import { Chapter, Item, Section } from './types';

init();

async function init() {
  const chapters = await loadChapters();

  for (const chapter of chapters) {
    generateChapter(chapter);
  }

  generateIndex(chapters);
}

function generateIndex(chapters: Chapter[]) {
  const buffer = createToc(
    chapters.map(chapter => chapter.no),
    1,
    'Browse by chapter:',
  );

  generateFile(
    'index',
    'OWASP Annotated Application Security Verification Standard',
    buffer,
  );
}

function generateChapter(chapter: Chapter) {
  const buffer = createToc(
    chapter.sections.map(section => section.no),
    1,
    'Browse by section:',
  );

  generateFile(chapter.no, generateTitle(chapter.no, chapter.name), buffer);

  for (const section of chapter.sections) {
    generateSection(section);
  }
}

function generateSection(section: Section) {
  const buffer = createToc(
    section.items.map(item => item.no),
    1,
    'Browse by item:',
  );

  generateFile(section.no, generateTitle(section.no, section.name), buffer);

  for (const item of section.items) {
    generateItem(item);
  }
}

function generateItem(item: Item) {
  const content = [
    convertMarkdownHyperlinks(item.description),
    createTable(
      [],
      [
        ['Level 1', item.level1],
        ['Level 2', item.level2],
        ['Level 3', item.level3],
      ],
    ),
  ];

  if (item.cwe.length > 0 || item.nist.length > 0) {
    content.push(createTable(['CWE', 'NIST'], [[item.cwe, item.nist]]));
  }

  content.push(loadAnnotations(item.no));

  generateFile(
    item.no,
    generateTitle(item.no, item.name || 'TODO'),
    content.filter(v => v.length > 0).join('\n\n'),
  );
}

function generateTitle(no: string, name: string) {
  return `${no.replace('V', '')} ${name}`;
}

function loadAnnotations(no: string): string {
  const annotationsPath = `${__dirname}/../annotations/${no.replace(
    /\./g,
    '/',
  )}.rst`;

  if (fs.existsSync(annotationsPath)) {
    return `\n\n${fs.readFileSync(annotationsPath).toString()}`;
  }

  return '';
}

import { readFileSync } from 'fs';
import { parse as parseCsv } from 'papaparse';
import { compare } from 'semver';
import { Chapter, Section } from './types';

export async function loadChapters() {
  const rows = await fetchCsvRows();

  const chapters: Record<string, Chapter> = {};
  const sections: Record<string, Section> = {};

  for (const row of rows) {
    let chapter: Chapter;
    let section: Section;

    if (!chapters[row.chapterNo]) {
      chapter = chapters[row.chapterNo] = {
        no: row.chapterNo,
        name: row.chapterName,
        sections: [],
      };
    } else {
      chapter = chapters[row.chapterNo];
    }

    if (!sections[row.sectionNo]) {
      section = sections[row.sectionNo] = {
        no: row.sectionNo,
        name: row.sectionName,
        items: [],
      };

      chapter.sections.push(section);
    } else {
      section = sections[row.sectionNo];
    }

    section.items.push({
      no: row.itemNo,
      name: row.itemName,
      description: row.itemDescription,
      level1: row.level1,
      level2: row.level2,
      level3: row.level3,
      cwe: row.cwe,
      nist: row.nist,
    });
  }

  return Object.values(chapters);
}

async function fetchCsvRows(): Promise<CsvRow[]> {
  const text = readFileSync('src/asvs.csv').toString();
  const { data, errors } = parseCsv(text);

  if (errors.length > 0) {
    throw new Error('Unable to parse the CSV file');
  }

  return data
    .slice(1) // remove the headers
    .map(
      ([
        chapterNo,
        chapterName,
        sectionNo,
        sectionName,
        itemNo,
        itemName,
        itemDescription,
        level1,
        level2,
        level3,
        cwe,
        nist,
      ]) => ({
        chapterNo,
        chapterName,
        sectionNo,
        sectionName,
        itemNo,
        itemName,
        itemDescription,
        level1,
        level2,
        level3,
        cwe,
        nist,
      }),
    )
    .sort((a, b) => compare(a.itemNo, b.itemNo));
}

interface CsvRow {
  chapterNo: string;
  chapterName: string;
  sectionNo: string;
  sectionName: string;
  itemNo: string;
  itemName: string;
  itemDescription: string;
  level1: string;
  level2: string;
  level3: string;
  cwe: string;
  nist: string;
}

'use strict';

///////////////
// This node program relies on the --harmony flag (ES6 functionality)
// Run with "node --harmony convert.js"
///////////////

const DOC_DIR = __dirname + '/../../../docs/';

let asvs = require('owasp-asvs'),
    fs = require('fs'),
    pdc = require('pdc'),
    aasvs = require('./../../../src/aasvs.json'),
    includes = require('array-includes'),
    lang = 'en',
    chapterNumber = 4,
    h2Number = 0,
    requirementChapter = 0;

/* when Array#includes is not present */
delete Array.prototype.includes;
var shimmedIncludes = includes.shim();

asvs.requirements.forEach(function(requirement) {
    let annotatedRequirement = aasvs.requirements.find(
        (annotatedRequirement) =>
            (annotatedRequirement.chapterNr === requirement.chapterNr &&
             annotatedRequirement.nr        === requirement.nr)
    );

    if (!annotatedRequirement) {
        return;
    }

    if (!requirement.levels.includes(2)) {
        return;
    }

    if (requirementChapter != requirement.chapterNr) {
        chapterNumber++;
        h2Number = 0;
        requirementChapter = requirement.chapterNr;

        console.log('# ' + chapterNumber + '. ' + asvs.chapters['' + requirementChapter]['name'][lang] + "\n");
    }

    h2Number++;

    let title = chapterNumber + '.' + h2Number + '. V' + requirement.chapterNr + '.' + requirement.nr + ': ' + annotatedRequirement.shortTitle[lang];

    let requirementDoc = `${title}
${"-".repeat(title.length)}
### ${requirement.title[lang]}
`;

    console.log(requirementDoc);
});

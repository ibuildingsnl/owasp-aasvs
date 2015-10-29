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
    lang = 'en';

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

    let title = requirement.chapterNr + '.' + requirement.nr + ' ' + annotatedRequirement.shortTitle[lang];

    let requirementDoc = `${title}
${"=".repeat(title.length)}

${requirement.title[lang]}

Levels: ${requirement.levels.join(", ")}

`;

    let helpFilesDir = `${__dirname}/../../../src/help/${requirement.chapterNr}/${requirement.nr}/${lang}/`;
    fs.readdir(helpFilesDir, function (err, files) {
        if (err) {
            return;
        }

        Promise.all(files.map(function(file) {
            return new Promise(function(resolve, reject) {
                fs.readFile(helpFilesDir + file, function(err, result) {
                    if (err) {
                        reject(err);
                    }

                    let helpTextInMdFormat = `${aasvs.helpTypes[file][lang]}
${"-".repeat(file.length)}

${result}`;

                    resolve(helpTextInMdFormat);
                });
            });
        })).then(function(helpTextsInMdFormat) {
            return Promise.all(helpTextsInMdFormat.map(function(helpTextInMdFormat) {
                return new Promise(function(resolve, reject) {
                    pdc(helpTextInMdFormat, 'markdown_github', 'rst', function(err, result) {
                        if (err) {
                            reject(err);
                        }
                        resolve(result);
                    });
                })
            }));
        }).then(function(helpTextsInRstFormat) {
            requirementDoc += helpTextsInRstFormat.join("\n\n");

            let requirementFilePath = DOC_DIR + 'requirement-' + requirement.chapterNr + '.' + requirement.nr + '.rst';
            fs.writeFile(requirementFilePath, requirementDoc, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("Wrote" + requirementFilePath);
            });
        });
    });

    // build chapter indexes
    for (let chapterNr in asvs.chapters) {
        let chapterName = asvs.chapters[chapterNr].name[lang];

        let fileNames = asvs.requirements.reduce(function(fileNames, requirement) {
            if (requirement.chapterNr !== chapterNr) {
                return fileNames;
            }
            fileNames[fileNames.length] = 'requirement-' + chapterNr + '.' + requirement.nr;
            return fileNames;
        }, []);

        let chapterDoc = `v${chapterNr} ${chapterName}
=${"=".repeat(chapterNr.length)}=${"=".repeat(chapterName.length)}

.. toctree::
  :maxdepth: 1
  :titlesonly:

  ${fileNames.join("\n  ")}
`;

        let chapterFilePath = DOC_DIR + 'v' + chapterNr + '.rst';
        fs.writeFile(chapterFilePath, chapterDoc);
        console.log('Wrote ' + chapterFilePath);
    }


    // build level indexes
    for (let levelNr in asvs.levelNames) {
        let levelName = asvs.levelNames[levelNr][lang];

        let fileNames = asvs.requirements.reduce(function(fileNames, requirement) {
            if (!requirement.levels.includes(+levelNr)) {
                return fileNames;
            }
            fileNames[fileNames.length] = 'requirement-' + requirement.chapterNr + '.' + requirement.nr;
            return fileNames;
        }, []);

        let levelDoc = `Level ${levelNr}: ${levelName}
======${"=".repeat(levelNr.length)}==${"=".repeat(levelName.length)}

.. toctree::
  :maxdepth: 1
  :titlesonly:

  ${fileNames.join("\n  ")}
`;

        let levelFilePath = DOC_DIR + 'level' + levelNr + '.rst';
        fs.writeFile(levelFilePath, levelDoc);
        console.log('Wrote ' + levelFilePath);
    }
});

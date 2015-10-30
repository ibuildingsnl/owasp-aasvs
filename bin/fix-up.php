<?php

/**
 * Quick and dirty script to copy over since and initialise missing AASVS entries.
 */

define('ASVS_FILE_PATH', __DIR__ . '/../../owasp-asvs/src/asvs.json');
define('AASVS_FILE_PATH', __DIR__ . '/../src/aasvs.json');

$asvs  = json_decode(file_get_contents(ASVS_FILE_PATH));
$aasvs = json_decode(file_get_contents(AASVS_FILE_PATH));

foreach ($asvs->requirements as $requirement) {
  $currentAnnotatedRequirement = NULL;
  foreach ($aasvs->requirements as $annotatedRequirement) {
    if ($annotatedRequirement->chapterNr !== $requirement->chapterNr) {
      continue;
    }
    if ($annotatedRequirement->nr !== $requirement->nr) {
      continue;
    }
    $currentAnnotatedRequirement = $annotatedRequirement;
  }

  if (!$currentAnnotatedRequirement) {
    echo "Adding missing AASVS: " . $requirement->chapterNr . '.' . $requirement->nr . PHP_EOL;

    $newAnnotatedRequirements = [];
    foreach ($aasvs->requirements as $annotatedRequirement) {
      if ($currentAnnotatedRequirement) {
        $newAnnotatedRequirements[] = $annotatedRequirement;
        continue;
      }

      if ($annotatedRequirement->chapterNr < $requirement->chapterNr) {
        $newAnnotatedRequirements[] = $annotatedRequirement;
        continue;
      }

      if ($annotatedRequirement->chapterNr === $requirement->chapterNr && $annotatedRequirement->nr < $requirement->nr) {
        $newAnnotatedRequirements[] = $annotatedRequirement;
        continue;
      }

      $currentAnnotatedRequirement = (object) [
        'chapterNr' => $requirement->chapterNr,
        'nr' => $requirement->nr,
        'shortTitle' => ['en' => 'TODO'],
        'related' => [],
      ];
      $newAnnotatedRequirements[] = $currentAnnotatedRequirement;

      $newAnnotatedRequirements[] = $annotatedRequirement;
    }

    if (!$currentAnnotatedRequirement) {
      $currentAnnotatedRequirement = (object) [
        'chapterNr' => $requirement->chapterNr,
        'nr' => $requirement->nr,
        'shortTitle' => ['en' => 'TODO'],
        'related' => [],
      ];
      $newAnnotatedRequirements[] = $currentAnnotatedRequirement;
    }

    $aasvs->requirements = $newAnnotatedRequirements;
  }

  if (empty($currentAnnotatedRequirement->since)) {
    $currentAnnotatedRequirement->since = "1.0";
  }

  $requirement->since = $currentAnnotatedRequirement->since;
}

foreach ($aasvs->requirements as $requirement) {
  unset($requirement->since);
}

file_put_contents(
  ASVS_FILE_PATH,
  json_encode(
    $asvs,
    JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT
  )
);

file_put_contents(
  AASVS_FILE_PATH,
  json_encode(
    $aasvs,
    JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT
  )
);

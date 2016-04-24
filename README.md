#Chroma Squad Data Utils

Utilities for working with the `.csqd` data format.
Chroma Squad is a nice indie game from Behold Studios.
It stores its game state in custom `.csqd` data files.
This repo was an exercise in reverse engineering these data files.

Game Website: http://www.chromasquad.com/

Game steam: http://store.steampowered.com/app/251130

Thanks to https://github.com/henriquekieckbusch/Chroma_squad_saveedit for guidance

## Installation
`npm install csqd`

## Usage

```javascript
var csqd = require('csqd');
var csqdFilepath = './CSQ-SaveGameFile-635968661423062140.csqd';

function readFileHandler(err, data){  
  if(err){throw err;}

  console.log(csqd.toJSON(data));
};

fs.readFile(csqdFilepath, {encoding: "UTF8"}, readFileHandler);
```

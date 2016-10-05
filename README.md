# webpack-bail-example
Example demonstrating how webpack fails to throw an error when "bail" is set to true.

## Overview
This example will successfully generate a bundle but fail during uglification. 
```
 npm run build 
 
 // Output
 
 > node ./node_modules/webpack/bin/webpack

Hash: 3a0b09fc6df37a18f682
Version: webpack 1.13.2
Time: 1944ms
         Asset    Size  Chunks             Chunk Names
dist.bundle.js  729 kB       0  [emitted]  main
  [87] ./OutOfScope.js 126 bytes {0} [built]
    + 172 hidden modules

ERROR in dist.bundle.js from UglifyJs
SyntaxError: Unexpected token: keyword (default) [./OutOfScope.js:1,0]
```

When executing with the webpack api:
```
   node webpack-api-run 
 
 // Output
 
 Bail was never called!
[ Error: dist.bundle.js from UglifyJs
  SyntaxError: Unexpected token: keyword (default) [./OutOfScope.js:1,0]
    .....
```


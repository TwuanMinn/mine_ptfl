const fs = require('fs');
const path = require('path');

const target = path.join('node_modules', 'react-router-dom', 'dist', 'index.mjs');

if (!fs.existsSync(target)) {
  const content = "export * from './index.js';\n";
  fs.writeFileSync(target, content, 'utf8');
}

import fs from 'fs';

const files = [
  'src/pages/index.astro',
  'src/pages/text-to-markdown.astro',
  'src/layouts/Layout.astro'
];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check index.astro (is:inline script)
  if (file.includes('index.astro')) {
    const match = content.match(/<script is:inline>([\s\S]*?)<\/script>/);
    if (match) {
      try {
        new Function(match[1]);
        console.log(`✅ ${file}: is:inline script VALID`);
      } catch(e) {
        console.log(`❌ ${file}: ${e.message}`);
      }
    }
  }
  
  // Check text-to-markdown.astro (bundled script) - can't fully validate imports but can check syntax
  if (file.includes('text-to-markdown.astro')) {
    const match = content.match(/<script>([\s\S]*?)<\/script>/);
    if (match) {
      try {
        // Remove import statements for syntax checking
        const stripped = match[1].replace(/import\s+.*?from\s+['"].*?['"];?\s*/g, '');
        new Function(stripped);
        console.log(`✅ ${file}: bundled script VALID`);
      } catch(e) {
        console.log(`❌ ${file}: ${e.message}`);
      }
    }
  }
}

console.log('Done checking');

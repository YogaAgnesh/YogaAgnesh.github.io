"""Release checks for this static portfolio; no network or third-party packages."""
from pathlib import Path
import re,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1];dist=root;errors=[]
html=(dist/'index.html').read_text(encoding='utf8')
for path in re.findall(r'(?:src|href)="([^"#]+)"',html):
 if ':' not in path and not (dist/path.split('?')[0]).exists():errors.append('Missing entry asset: '+path)
for tag in re.findall(r'<script\b[^>]*>',html):
 if 'src=' not in tag:errors.append('Inline script in entry document')
for path in dist.rglob('*.svg'):
 tree=ET.parse(path)
 for node in tree.iter():
  if node.tag.split('}')[-1] in ['script','foreignObject']:errors.append('Active SVG: '+str(path))
  for key,value in node.attrib.items():
   if key.lower().startswith('on'):errors.append('SVG event handler: '+str(path))
   if key.split('}')[-1]=='href' and not value.startswith('#'):errors.append('External SVG reference: '+str(path))
for file in dist.glob('*.js'):
 text=file.read_text(encoding='utf8')
 if re.search(r'\beval\s*\(|new\s+Function\s*\(',text):errors.append('Dynamic code evaluation: '+file.name)
for directive in ["script-src 'self'","object-src 'none'","base-uri 'none'","form-action 'none'","frame-src 'none'"]:
 if directive not in html:errors.append('Missing policy: '+directive)
assert not errors,'\n'.join(errors)
print('PASS: entry assets, SVG safety, dynamic-code check, and CSP directives')

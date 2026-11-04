"""Combine ordered first-party CSS without changing the source cascade."""
from pathlib import Path
import re,hashlib
root=Path(__file__).resolve().parents[1];dist=root
sources=['styles.css','studio.css','stickers.css','cutout.css','review.css','finishing.css','certifications.css','photo-print.css','polish.css','pipelines.css','hero-refine.css','theme-details.css','motion-polish.css','prism.css']
css='\n'.join('/* '+name+' */\n'+(dist/name).read_text(encoding='utf8') for name in sources)
(dist/'site.css').write_text(css,encoding='utf8')
digest=hashlib.sha256(css.encode()).hexdigest()[:12]
p=dist/'index.html';html=p.read_text(encoding='utf8')
html=re.sub(r'<link rel="stylesheet" href="(?:'+ '|'.join(re.escape(n) for n in sources)+r'|site\.css)(?:\?[^\"]*)?">\s*','',html)
html=html.replace('</head>',f'<link rel="stylesheet" href="site.css?v={digest}">\n</head>');p.write_text(html,encoding='utf8')
print(f'Bundled {len(sources)} stylesheets: {len(css.encode()):,} bytes; hash {digest}')

import os, re

files_to_fix = [
    'Modal Be supposed to Be able to.html',
    'Modal Could have.html',
    'Modal Dare to.html',
    'Modal Had better Would rather.html',
    'Modal Must have.html',
    'Modal Will.html',
    'Modal Would have.html',
    'Modal Would.html'
]

targets = [
    'E:/antigravity/ILTES/public/academy-labs',
    'F:/LearnCare Academy/html code'
]

pattern = re.compile(r'(<div class="gap-actions">[\s\S]*?</div>\s*</div>)(\s*(?:<div class="fill-in-item"|</div>\s*<div style="margin-top: 25px;))')

for folder in targets:
    if not os.path.exists(folder):
        continue
    for fname in files_to_fix:
        fpath = os.path.join(folder, fname)
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            text = fp.read()
        
        diff_before = text.count('<div') - text.count('</div')
        if diff_before == 99:
            def replacer(m):
                return m.group(1) + '\n                </div>' + m.group(2)
            
            fixed_text, count = pattern.subn(replacer, text)
            diff_after = fixed_text.count('<div') - fixed_text.count('</div')
            with open(fpath, 'w', encoding='utf-8') as fp:
                fp.write(fixed_text)
            print(f"Fixed {fname} in {folder}: {count} replacements, diff: {diff_before} -> {diff_after}")
        else:
            print(f"File {fname} in {folder} has diff {diff_before} (not 99, skipping)")

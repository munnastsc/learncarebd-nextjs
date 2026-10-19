import re
import json

with open('src/lib/spokenConversationsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'\{\s*"id":\s*"([^"]+)",\s*"number":\s*(\d+),\s*"title":\s*"([^"]+)",\s*"titleBn":\s*"([^"]+)",\s*"level":\s*"([^"]+)",\s*"category":\s*"([^"]+)"')
matches = pattern.findall(content)

convs = []
for m in matches:
    convs.append({
        'id': m[0],
        'number': int(m[1]),
        'title': m[2],
        'titleBn': m[3],
        'level': m[4],
        'category': m[5]
    })

with open('scripts/convs_list.json', 'w', encoding='utf-8') as out:
    json.dump(convs, out, ensure_ascii=False, indent=2)

print(f"Extracted {len(convs)} conversations")

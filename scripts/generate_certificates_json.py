# scripts/generate_certificates_json.py

import os
import json

CERT_FOLDER = '../assets/certificates'
OUTPUT_FILE = '../data/certificates.json'

certificates = []
badges = []

for file in sorted(os.listdir(CERT_FOLDER)):
    if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        entry = {"file": file, "description": ""}
        if 'badge' in file.lower():
            badges.append(entry)
        else:
            certificates.append(entry)

data = {
    "certificates": certificates,
    "badges": badges
}

with open(OUTPUT_FILE, 'w') as f:
    json.dump(data, f, indent=2)

print(f"✅ Generated {OUTPUT_FILE}")

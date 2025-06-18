import os
import json

cert_dir = "../assets/certificates"
output_file = "../data/certificates.json"

if not os.path.exists(cert_dir) or not os.listdir(cert_dir):
    print("No certificates found. Skipping JSON generation.")
    exit(0)

certs = []

for fname in sorted(os.listdir(cert_dir)):
    if fname.lower().endswith((".png", ".jpg", ".jpeg", ".webp", ".svg")):
        certs.append({
            "title": os.path.splitext(fname)[0].replace("-", " ").title(),
            "image": f"assets/certificates/{fname}",
            "date": "2025-01-01"  # Add logic to set this from filename if needed
        })

with open(output_file, "w") as f:
    json.dump(certs, f, indent=2)

print("Certificates JSON generated successfully.")

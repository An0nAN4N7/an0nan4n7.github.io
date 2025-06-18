import os
import json

notes_dir = "../assets/pdf/notes"
output_file = "../data/notes.json"

if not os.path.exists(notes_dir) or not os.listdir(notes_dir):
    print("No notes found. Skipping JSON generation.")
    exit(0)

notes = []

for fname in sorted(os.listdir(notes_dir)):
    if fname.endswith(".pdf"):
        notes.append({
            "title": os.path.splitext(fname)[0].replace("-", " ").title(),
            "file": f"assets/pdf/notes/{fname}"
        })

with open(output_file, "w") as f:
    json.dump(notes, f, indent=2)

print("Notes JSON generated successfully.")

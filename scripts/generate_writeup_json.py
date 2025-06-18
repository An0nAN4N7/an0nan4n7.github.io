import os
import json

base_dirs = {
    "htb": "../posts/htb",
    "bugbounty": "../posts/bugbounty"
}

for category, path in base_dirs.items():
    if not os.path.exists(path) or not os.listdir(path):
        print(f"No {category} writeups found. Skipping JSON generation.")
        continue

    entries = []
    for fname in sorted(os.listdir(path)):
        if fname.endswith(".html"):
            title = os.path.splitext(fname)[0].replace("-", " ").title()
            entries.append({
                "title": title,
                "file": f"posts/{category}/{fname}"
            })

    output_file = f"../data/{category}.json"
    with open(output_file, "w") as f:
        json.dump(entries, f, indent=2)

    print(f"{category}.json generated successfully.")

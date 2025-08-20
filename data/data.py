import pandas as pd
import json
from collections import defaultdict

# Load Excel
df = pd.read_excel("Velmora.xlsx", sheet_name="Details")

# Define mapping from verbose region to slug
region_slug_map = {
    "Central Velmora": "central-velmora",
    "Northern Highlands": "northern-highlands",
    "Southern Lakes": "southern-lakes",
    "Eastern Reaches": "eastern-reaches",
    "Western Plateau": "western-plateau",
    "Northern Bay": "northern-bay"
}

# Descriptions per region
region_descriptions = {
    "central-velmora": "The political and economic heart of Velmora, home to the capital city and the nation's most prestigious institutions.",
    "northern-highlands": "A rugged and traditional northern region known for its industrial towns and fierce derbies.",
    "southern-lakes": "Picturesque towns and lakefront stadiums define this region, with clubs rich in local identity.",
    "eastern-reaches": "A hardworking region with strong community ties, known for producing grassroots talent.",
    "western-plateau": "A vast region combining historic cities and emerging footballing outposts.",
    "northern-bay": "A maritime region known for its sea breeze stadiums and tactically bold clubs."
}

# Default template
output = {}

# Group data
for _, row in df.iterrows():
    region_name = row['Local Region'].strip()
    city = row['City'].strip()
    
    slug = region_slug_map.get(region_name, region_name.lower().replace(" ", "-"))
    if slug not in output:
        output[slug] = {
            "id": slug,
            "name": region_name,
            "description": region_descriptions.get(slug, ""),
            "cities": {}
        }

    city_entry = output[slug]["cities"].setdefault(city, {
        "climate": "Unknown",  # Can be adjusted manually or inferred elsewhere
        "clubs": []
    })

    club = {
        "name": row['Club Name'],
        "nickname": row.get("nickname", ""),
        "six_letter_name": row.get("six_letter_name", ""),
        "three_letter_name": row.get("three_letter_name", ""),
        "hashtag": row.get("hashtag", ""),
        "founded": int(row['founded in']) if not pd.isnull(row['founded in']) else None,
        "colors": str(row.get("Home Kit  [F/B]", "#000000")).split("/"),
        "stadium": row.get("Stadium Name", ""),
        "coord": row.get("Coords", [None, None]),
        "club_history": row.get("Club History", ""),
        "club_values": row.get("Club Values", "").split(";") if pd.notna(row.get("Club Values")) else [],
        "club_slogan": row.get("Club Slogan", ""),
        "competition_history": {
            "VSL": {"winnerIn": []},
            "VNN": {"winnerIn": []},
            "VERL": {"winnerIn": []},
            "VWRL": {"winnerIn": []},
            "VNRL": {"winnerIn": []},
            "VSRL": {"winnerIn": []},
            "TVC": {"winnerIn": []}
        },
        "kits": {
            "home": f"assets/kits/{row.get('six_letter_name', '').lower()}/home.svg",
            "home_back": f"assets/kits/{row.get('six_letter_name', '').lower()}/home_back.svg",
            "away": f"assets/kits/{row.get('six_letter_name', '').lower()}/away.svg",
            "away_back": f"assets/kits/{row.get('six_letter_name', '').lower()}/away_back.svg"
        },
        "supporter_profile": {
            "loyalty": 10,
            "passion": 10,
            "patience": 10,
            "affluence": 10,
            "temprament": 10,
            "expectations": 10
        },
        "rivals": [],
        "derbies": [],
        "players_alumni": {
            "favorites": [],
            "icons": [],
            "legends": []
        },
        "schedule": [],
        "fan_clubs": [],
        "supporter_quotes": []
    }

    city_entry["clubs"].append(club)

# Save to JSON
with open("velmora_clubs.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print("✅ JSON saved to velmora_clubs.json")
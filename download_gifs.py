import os
import requests
from urllib.parse import quote

# ============================================================
# UBG GIF DOWNLOADER
# ============================================================
#
# Downloads UBG style animations into:
#
#     assets/styles/
#
# Run with:
#
#     python download_gifs.py
#
# ============================================================


# ------------------------------------------------------------
# SETTINGS
# ------------------------------------------------------------

OUTPUT_FOLDER = os.path.join("assets", "styles")

BASE_URL = "https://static.wikitide.net/ubgwiki"


# ------------------------------------------------------------
# STYLE GIF LIST
# ------------------------------------------------------------

FILES = [

    # =========================
    # UNCOMMON
    # =========================

    "Basic_Idle.gif",
    "Basic_Lights.gif",
    "Basic_Heavies.gif",
    "Basic_Dashes.gif",
    "Basic-ult-.gif",

    "Smash_Idle.gif",
    "Smash_Lights.gif",
    "Smash_Heavy.gif",
    "Smash_Dashes.gif",

    "Long_Guard_Idle.gif",
    "LG_Lights.gif",
    "LG_Heavy.gif",
    "LG_Dashes.gif",

    "Counter_Idle.gif",
    "Counter_Lights.gif",
    "Counter_Heavy.gif",
    "Counter_Dashes.gif",

    "Turtle_Idle.gif",
    "Turtle_Lights.gif",
    "Turtle_Heavy.gif",
    "Turtle_Dashes.gif",


    # =========================
    # RARE
    # =========================

    "Corkscrew_Idle.gif",
    "Corkscrew_Lights.gif",
    "Corkscrew_Heavy.gif",
    "Corkscrew_Dashes.gif",

    "Charge_Idle.gif",
    "Charge_Lights.gif",
    "Charge_Heavy.gif",
    "Charge_Dashes.gif",
    "Stampede.gif",

    "Hammer_Idle.gif",
    "Hammer_Lights.gif",
    "Hammer_Heavy.gif",
    "Hammer_Dashes.gif",
    "Body_Blow.gif",

    "Trickster_Idle.gif",
    "Trickster_Lights.gif",
    "Trickster_Heavy.gif",
    "Trickster_Dashes.gif",

    "Kimura_Idle.gif",
    "Kimura_Lights.gif",
    "Kimura_Heavy.gif",
    "Kimura_Dashes.gif",


    # =========================
    # MYTHIC
    # =========================

    "Ippo_Idle.gif",
    "Ippo_Lights.gif",
    "Ippo_Heavy.gif",
    "Ippo_Dashes.gif",
    "Dempsey_Roll.gif",

    "Hitman_Idle.gif",
    "Hitman_Lights.gif",
    "Hitman_Heavy.gif",
    "Hitman_Dashes.gif",

    "Hands_Low_Idle.gif",
    "HL_Lights.gif",
    "HL_Heavy.gif",
    "HL_Dashes.gif",

    "Wolf_Idle.gif",
    "Wolf_Lights.gif",
    "Wolf_Heavy.gif",
    "Wolf_Dashes.gif",
    "White_Fang_storage_showcase.gif",

    "Bullet_Idle.gif",
    "Bullet_Lights.gif",
    "Bullet_Heavy.gif",
    "Bullet_Dashes.gif",

    "Switch_Hit_Idle.gif",
    "SH_Light.gif",
    "SH_Heavy.gif",
    "SH_Dashes.gif",
    "Static_Neutral.gif",
    "Static_PD.gif",

    "Surgeon_meters.png",


    # =========================
    # LEGENDARY
    # =========================

    "Slugger_Idle.gif",
    "Slugger_Lights.gif",
    "Slugger_Heavy.gif",
    "Slugger_Dashes.gif",

    "Hawk_Idle.gif",
    "Hawk_Lights.gif",
    "Hawk_Heavies.gif",
    "Hawk_Dashes.gif",
    "Hawk_meter.png",

    "Ghost_Idle.gif",
    "Ghost_Lights.gif",
    "Ghost_Heavy.gif",
    "Ghost_Dashes.gif",
    "Ghost_Jab.gif",

    "Iron_Fist_Idle.gif",
    "IF_Lights.gif",
    "IF_Heavy.gif",
    "IF_Dashes.gif",

    "Shotgun_Idles.gif",
    "Shotgun_Lights.gif",
    "Shotgun_Heavy.gif",
    "Shotgun_Dashes.gif",
    "Single_barrage.gif",
    "Prodigy.gif",
    "Double_barrage.gif",

    "Freedom_Idles.gif",
    "Freedom_Lights.gif",
    "Freedom_Heavy.gif",
    "Freedom_Dashes.gif",
    "Freedom_Switching.gif",
    "Freedom_Whirlwind.gif",
    "Freedom_Flicker.gif",
    "Freedom_Smash.gif",
    "Freedom_Chainswitching.gif",

    "Chronos_Idle.gif",
    "Chronos_Lights.gif",
    "Chronos_Heavy.gif",
    "Chronos_Dashes.gif",
    "Chronos_Focus_showcase.gif",

    "White_Ash_Idle.gif",
    "WA_Lights.gif",
    "WA_Heavy.gif",
    "WA_Dashes.gif",
    "Joe_Burn_Showcase.gif",
    "Joe_Ult_Showcase.gif",

    "Supernova_Idle.gif",
    "Supernova_stamina_bar_low_hp.png",
    "Supernova_meter_full.png",

    "Deimos_Idle.gif",


    # =========================
    # SHINY
    # =========================

    # Godspeed
    "Chronos_Idle.gif",

    # Bald
    "Basic_Idle.gif",

    # Coyote
    "Wolf_Idle.gif",

    # Drill
    "Corkscrew_Idle.gif",

    # Nanomachines
    "Turtle_Idle.gif",


    # =========================
    # OTHER / SPECIAL
    # =========================

    "Void_Idle.gif",
    "Void_Light.gif",
    "Void_Heavy.gif",
    "Void_Dashes.gif",
    "LVSlash.gif",
    "WideSlash.gif",
    "VoidRain.gif",

    "7stackingghost.gif",

    "Son-folk.gif",

    "UBGwiki_Placeholder!.png",
    "AttackPlaceholder.png",
]


# ------------------------------------------------------------
# CREATE FOLDER
# ------------------------------------------------------------

os.makedirs(OUTPUT_FOLDER, exist_ok=True)


# ------------------------------------------------------------
# DOWNLOAD FUNCTION
# ------------------------------------------------------------

def download_file(filename):

    encoded_filename = quote(filename)

    url = f"{BASE_URL}/{encoded_filename}"

    destination = os.path.join(
        OUTPUT_FOLDER,
        filename
    )

    print(f"\nDownloading: {filename}")
    print(f"URL: {url}")

    try:

        response = requests.get(
            url,
            timeout=30,
            headers={
                "User-Agent": (
                    "Mozilla/5.0 "
                    "(Windows NT 10.0; Win64; x64) "
                    "AppleWebKit/537.36 "
                    "(KHTML, like Gecko) "
                    "Chrome/153.0 Safari/537.36"
                )
            }
        )

        if response.status_code == 200:

            with open(destination, "wb") as file:
                file.write(response.content)

            size_kb = len(response.content) / 1024

            print(
                f"SUCCESS: {filename} "
                f"({size_kb:.1f} KB)"
            )

            return True

        else:

            print(
                f"FAILED: HTTP {response.status_code}"
            )

            return False

    except requests.exceptions.RequestException as error:

        print(f"ERROR: {error}")

        return False


# ------------------------------------------------------------
# MAIN DOWNLOAD
# ------------------------------------------------------------

print("=" * 60)
print("UBG GIF DOWNLOADER")
print("=" * 60)

print(f"\nOutput folder:")
print(os.path.abspath(OUTPUT_FOLDER))

print(f"\nFiles to check: {len(FILES)}")

successful = []
failed = []


for filename in FILES:

    # Avoid downloading duplicate files
    destination = os.path.join(
        OUTPUT_FOLDER,
        filename
    )

    if os.path.exists(destination):

        print(f"\nSKIPPING: {filename}")
        print("Already exists.")

        successful.append(filename)

        continue


    result = download_file(filename)

    if result:
        successful.append(filename)
    else:
        failed.append(filename)


# ------------------------------------------------------------
# FINAL REPORT
# ------------------------------------------------------------

print("\n")
print("=" * 60)
print("DOWNLOAD COMPLETE")
print("=" * 60)

print(f"\nSuccessful: {len(successful)}")
print(f"Failed:     {len(failed)}")


if failed:

    print("\nFILES THAT COULD NOT BE DOWNLOADED:")
    print("-" * 60)

    for filename in failed:
        print(f"  - {filename}")

    print("\nThese may have:")
    print("  • a different filename")
    print("  • a different wiki path")
    print("  • been removed")
    print("  • been renamed")
    print("  • restricted access")


print("\n")
print("Images are located at:")

print(
    os.path.abspath(OUTPUT_FOLDER)
)

print("\nDone!")

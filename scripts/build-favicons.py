"""Build the QRF-only favicon package from the approved square monogram."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCE = PUBLIC / "android-chrome-512x512.png"


def resized(master: Image.Image, size: int) -> Image.Image:
    return master.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    master = Image.open(SOURCE).convert("RGBA")
    if master.width != master.height:
        raise ValueError("The favicon source must use a square 1:1 canvas.")

    for size in (16, 32, 48, 64, 96):
        resized(master, size).save(
            PUBLIC / f"qrf-favicon-{size}x{size}.png",
            format="PNG",
            optimize=True,
        )

    resized(master, 48).save(
        PUBLIC / "qrf-favicon.png",
        format="PNG",
        optimize=True,
    )

    resized(master, 180).save(
        PUBLIC / "qrf-apple-touch-icon.png",
        format="PNG",
        optimize=True,
    )
    resized(master, 192).save(
        PUBLIC / "qrf-app-icon-192x192.png",
        format="PNG",
        optimize=True,
    )

    resized(master, 512).save(
        PUBLIC / "qrf-app-icon-512x512.png",
        format="PNG",
        optimize=True,
    )

    master.save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )


if __name__ == "__main__":
    main()

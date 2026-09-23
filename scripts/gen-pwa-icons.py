"""Generate PWA icons for Costanera Corrientes from the brand emblem.

Draws the sun-over-the-Paraná-River motif (no external SVG rasteriser needed)
onto the brand teal background. Produces 192px, 512px and a 512px maskable
variant (full-bleed background with the emblem inside the central safe zone).
"""
import math
from PIL import Image, ImageDraw

BG = (0x12, 0x3B, 0x43)
SUN = (0xF1, 0xB7, 0x5B)
SUN_LIGHT = (0xF7, 0xD4, 0x8B)
WAVE1 = (0xD7, 0xF0, 0xEC)
WAVE2 = (0x73, 0xC5, 0xBF)


def draw_emblem(d, cx, cy, scale):
    # Source emblem viewBox is 55 wide x 54 tall, centred at (27.5, 27).
    def P(x, y):
        return (cx + (x - 27.5) * scale, cy + (y - 27) * scale)

    w = max(2, int(scale))

    # Sun rays (short gold strokes above the sun).
    rays = [((35, 6.5), (35, 11.5)), ((17.5, 11.5), (21, 15)), ((52.5, 11.5), (49, 15))]
    for a, b in rays:
        d.line([P(*a), P(*b)], fill=SUN, width=max(2, int(2.5 * scale)))

    # Sun body.
    sx, sy = P(31, 29)
    r = 7.5 * scale
    d.ellipse([sx - r, sy - r, sx + r, sy + r], fill=SUN_LIGHT)

    # Sun arch (upper arc).
    a0 = P(11, 33.5)
    a1 = P(51, 33.5)
    top = P(11, 21)
    bbox = [a0[0], top[1], a1[0], a0[1]]
    d.arc(bbox, 180, 360, fill=SUN, width=max(2, int(4 * scale)))

    # River waves.
    def wave(y, amp, color, width):
        pts = []
        x0, x1 = 9, 52
        n = 64
        for i in range(n + 1):
            x = x0 + (x1 - x0) * i / n
            yy = y + amp * math.sin((x - x0) / (x1 - x0) * 2 * math.pi * 1.5)
            pts.append(P(x, yy))
        d.line(pts, fill=color, width=max(2, int(width * scale)))

    wave(38, 2.4, WAVE1, 3)
    wave(44, 2.4, WAVE2, 3)


def make(size, maskable):
    img = Image.new("RGB", (size, size), BG)
    d = ImageDraw.Draw(img)
    # Maskable icons keep the emblem inside the central 80% safe zone.
    scale = (size * (0.70 if maskable else 0.80)) / 55
    draw_emblem(d, size / 2, size / 2, scale)
    return img


if __name__ == "__main__":
    make(192, False).save("public/icons/icon-192.png")
    make(512, False).save("public/icons/icon-512.png")
    make(512, True).save("public/icons/icon-512-maskable.png")
    print("PWA icons generated.")

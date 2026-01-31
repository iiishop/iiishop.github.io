# Waterfall Gallery Images

This directory contains images for the waterfall gallery feature.

## Supported Formats

- PNG (.png)
- JPEG (.jpg, .jpeg)
- GIF (.gif)
- WebP (.webp)
- SVG (.svg)

## Image Descriptions

You can add a markdown description for any image by creating a `.md` file with the same name as the image.

For example:
- Image: `photo.jpg`
- Description: `photo.md`

The description will be displayed when the image is clicked in the gallery.

## File Naming

For automatic date extraction, you can include dates in your filenames using these formats:
- `YYYY-MM-DD` (e.g., `2024-01-15-sunset.jpg`)
- `YYYYMMDD` (e.g., `20240115-sunset.jpg`)
- `YYYY_MM_DD` (e.g., `2024_01_15_sunset.jpg`)

If no date is found in the filename, the current date will be used.

## Organization

You can organize images in subdirectories. The gallery will recursively scan all subdirectories.

Example structure:
```
WaterfallGraph/
├── nature/
│   ├── sunset.jpg
│   ├── sunset.md
│   └── mountain.png
├── urban/
│   ├── city-night.jpg
│   └── city-night.md
└── abstract/
    └── colors.webp
```

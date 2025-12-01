# OG Image System Documentation

## Overview

This system automatically generates Open Graph (OG) images for your articles. OG images are the preview images you see when sharing links on social media or messaging apps.

## How It Works

### The Two-Tier Approach

1. **Custom Static Images** (Priority 1)
   - If you create a custom OG image, the system serves it
   - Fast and gives you full creative control

2. **Auto-Generated Images** (Fallback)
   - If no custom image exists, the system generates one on-the-fly
   - Shows your article title on a clean white background

## File Naming System

Instead of manually naming files, the system uses **hashing** to create filenames:

```
Article Path: "kilovolt.mdx"
↓
Hash: "a1b2c3d4e5f6..." (generated from path)
↓
Looks for: "public/og/a1b2c3d4e5f6.png"
```

**Why hashing?**

- Same article always gets the same filename
- Works with any characters in your path (spaces, special chars, etc.)
- Automatic and consistent

## Creating Custom OG Images

### Step 1: Find Your Article's Hash

Start your dev server and visit your article. Check the console logs:

```
[OG] Static image not found for "My Kilovolt Guide" (kilovolt.mdx), generating dynamic image
```

Or temporarily add this to your route to see the hash:

```typescript
console.log("Hash:", hash); // After the hash generation line
```

### Step 2: Create Your Image

1. Design your OG image (recommended: 1200×630px)
2. Save it as: `public/og/{hash}.png`
3. Head to `/og/w/kilovolt/image.png`

You should now see the image and get this log on the console.

```
[OG] Served static image for "My Kilovolt Guide" (kilovolt.mdx)
```

## The GET Function Explained

```typescript
export async function GET(_req: Request, { params }) {
  // 1. Get the article from fumadocs
  const page = source.getPage(slug);

  // 2. Create hash from article path
  const hash = createHash("md5").update(page.path).digest("hex");

  // 3. Look for custom image at: public/og/{hash}.png
  const imagePath = path.join(process.cwd(), "public", "og", `${hash}.png`);

  // 4. If custom image exists, serve it
  if (fs.existsSync(imagePath)) {
    return serveCustomImage();
  }

  // 5. Otherwise, generate simple image with title
  return new ImageResponse();
}
```

## Integration with Next.js & Fumadocs

### The Route Structure

```
/w/kilovolt               → Your article route
/og/w/kilovolt/image.png  → OG image for that article
```

### How Fumadocs Connects It

In your article's metadata:

```typescript
export async function generateMetadata(props) {
  const page = source.getPage(params.slug);
  return {
    openGraph: {
      images: getPageImage(page).url, // Points to /og/w/kilovolt/image.png
    },
  };
}
```

When someone shares your article:

1. Social media crawlers request the OG image URL
2. Your `/og/w/[...slug]/route.tsx` handles the request
3. It checks for custom image → serves it if found
4. Otherwise generates dynamic image → returns that

## Console Logs Guide

**Static image served:**

```
[OG] Served static image for "Article Title" (path/to/article)
```

✅ Custom image found and served

**Fallback to dynamic:**

```
[OG] Static image not found for "Article Title" (path/to/article), generating dynamic image
```

ℹ️ No custom image, using auto-generated one

**Error:**

```
[OG] Error reading image for "Article Title" (path/to/article): [error details]
```

❌ Something went wrong reading the file

## Quick Reference

| What              | Where                          |
| ----------------- | ------------------------------ |
| Custom images     | `public/og/{hash}.png`         |
| OG route handler  | `app/og/w/[...slug]/route.tsx` |
| Image size        | 1200×630px (recommended)       |
| Supported formats | PNG (currently)                |
| Hash algorithm    | MD5 of article path            |

## Tips

- **Batch create images**: Generate hashes for all articles, then create images in bulk
- **Consistent design**: Use a template for all your custom OG images
- **File size**: Keep images under 1MB for fast loading

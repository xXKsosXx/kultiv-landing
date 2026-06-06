import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'

const input = 'public/images/logo-mot-kultivar.png'

const before = await sharp(input).metadata()
console.log(`Before: ${before.width}x${before.height} (${before.channels} channels, hasAlpha=${before.hasAlpha})`)

// Trim: remove edge pixels that match the bg.
// Threshold 10 absorbs anti-alias smudge from JPEG-style export artifacts.
const trimmedBuf = await sharp(input)
  .trim({ threshold: 10 })
  .toBuffer()

const trimmedMeta = await sharp(trimmedBuf).metadata()
console.log(`After trim: ${trimmedMeta.width}x${trimmedMeta.height}`)

// Small symmetric padding so the wordmark has breathing room
// (Image stays transparent if the source has alpha)
const pad = 24
const finalBuf = await sharp(trimmedBuf)
  .extend({
    top: pad,
    bottom: pad,
    left: pad,
    right: pad,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toBuffer()

const finalMeta = await sharp(finalBuf).metadata()
console.log(`Final: ${finalMeta.width}x${finalMeta.height}`)

await writeFile(input, finalBuf)

const stats = await readFile(input)
console.log(`Saved (${(stats.length / 1024).toFixed(1)} KB)`)

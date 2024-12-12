import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sizes = [16, 32, 48, 64, 128, 256];
const inputFile = path.join(__dirname, 'public', 'favicon.svg');
const outputDir = path.join(__dirname, 'public');

async function generateFavicons() {
  try {
    // Generate PNG favicons
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
      console.log(`Generated ${size}x${size} PNG favicon`);
    }

    // Generate 32x32 PNG for ICO
    await sharp(inputFile)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    // Create a simple ICO file (just a renamed 32x32 PNG)
    await fs.copyFile(
      path.join(outputDir, 'favicon-32x32.png'),
      path.join(outputDir, 'favicon.ico')
    );
    console.log('Generated ICO favicon (renamed 32x32 PNG)');
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
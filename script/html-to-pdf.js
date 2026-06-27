#!/usr/bin/env node
/**
 * html-to-pdf.js
 * Usage: node html-to-pdf.js [input.html] [output.pdf]
 * Defaults: ../business-persona-report.html -> ../business-persona-report.pdf
 */

const puppeteer = require('puppeteer');
const path      = require('path');
const fs        = require('fs');

const inputArg  = process.argv[2];
const outputArg = process.argv[3];

const inputFile = inputArg
  ? path.resolve(inputArg)
  : path.resolve(__dirname, '..', 'business-persona-report.html');

const outputFile = outputArg
  ? path.resolve(outputArg)
  : inputFile.replace(/\.html$/, '.pdf');

if (!fs.existsSync(inputFile)) {
  console.error(`File not found: ${inputFile}`);
  process.exit(1);
}

const FOOTER_STYLE = `
  font-family: 'Hanken Grotesk', Helvetica, sans-serif;
  font-size: 8pt;
  color: rgba(23,23,23,.38);
  width: 100%;
  padding: 0 .75in;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

(async () => {
  console.log(`Converting: ${path.basename(inputFile)}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page    = await browser.newPage();

  await page.goto(`file://${inputFile}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path:            outputFile,
    format:          'Letter',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log(`Saved: ${path.basename(outputFile)}`);
})();

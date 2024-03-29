/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const { exec } = require('child_process');
const kill = require('tree-kill');

const portConfigMap = {
  9000: { command: 'yarn serve' },
  8000: { command: 'yarn dev' },
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function createPDF(outputFile, port = 9000) {
  console.log('Creating PDF, saving to:', outputFile);
  const { command } = portConfigMap[port];
  const server = exec(command, { detached: true, stdio: 'ignore' });

  server.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    throw Error(data);
  });

  await sleep(1000);
  const host = `http://localhost:${port}/cv`;
  console.log('Creating PDF from...', host);
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
  await page.goto(host, { waitUntil: 'networkidle2' });
  await page.emulateMediaType('print')
  await page.pdf({ path: outputFile, format: 'A4' });
  await browser.close();
  console.log('Created PDF.');
  kill([server.pid]);

}

function makeCV(port) {
  createPDF('public/aidan_dunlop_cv.pdf', port);
}

module.exports = { makeCV };

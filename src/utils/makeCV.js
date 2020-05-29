/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const { exec, spawn } = require('child_process');

const portConfigMap = {
  9000: { command: 'yarn serve', serverStartedString: 'gatsby serve running at:' },
  8000: { command: 'yarn dev', serverStartedString: 'Compiled successfully' },
};

async function createPDF(outputFile, port = 9000) {
  console.log('Creating PDF, saving to:', outputFile);
  const { command, serverStartedString } = portConfigMap[port];
  const server = exec(command, { detached: true, stdio: 'ignore' });

  server.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    throw Error(data);
  });

  server.stdout.on('data', async (data) => {
    console.log(`stdout: ${data}`);
    if (data.includes(serverStartedString)) {
      const host = `http://localhost:${port}/cv`;
      console.log('Creating PDF from...', host);
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(host, { waitUntil: 'networkidle2' });
      await page.pdf({ path: outputFile, format: 'A4' });
      await browser.close();
      console.log('Created PDF.');
      spawn('kill', [server.pid]);
    }
  });
}

function makeCV(port) {
  createPDF('public/aidan_dunlop_cv.pdf', port);
}

module.exports = { makeCV };

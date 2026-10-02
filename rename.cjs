const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const renameMap = {
  'ThemeRexHeader.jsx': 'Header.jsx',
  'ThemeRexFooter.jsx': 'Footer.jsx',
  'CoreCapabilitiesSection.jsx': 'Capabilities.jsx',
  'WhatDoYouShipSection.jsx': 'Equipment.jsx',
  'DispatchCourseSection.jsx': 'Course.jsx',
  'WhoWeAreSection.jsx': 'About.jsx',
  'ContactSection.jsx': 'Contact.jsx',
  'WhatsAppWidget.jsx': 'WhatsApp.jsx',
  'HeroSection.jsx': 'Hero.jsx',
  'FAQSection.jsx': 'FAQ.jsx',
  'QuoteModal.jsx': 'Modal.jsx',
  'ServiceDetailPage.jsx': 'ServiceDetail.jsx',
  'DispatchCoursePage.jsx': 'CoursePage.jsx'
};

const oldNames = Object.keys(renameMap).map(f => f.replace('.jsx', ''));
const newNames = Object.values(renameMap).map(f => f.replace('.jsx', ''));

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (let i = 0; i < oldNames.length; i++) {
    const oldName = oldNames[i];
    const newName = newNames[i];
    if (content.includes(oldName)) {
      const regex = new RegExp(`\\b${oldName}\\b`, 'g');
      content = content.replace(regex, newName);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      replaceInFile(fullPath);
    }
  }
}

for (const [oldFile, newFile] of Object.entries(renameMap)) {
  const oldPathPages = path.join('src', 'pages', oldFile);
  const newPathPages = path.join('src', 'pages', newFile);
  if (fs.existsSync(oldPathPages)) {
    try {
      execSync(`git mv "${oldPathPages}" "${newPathPages}"`);
    } catch (e) {
      fs.renameSync(oldPathPages, newPathPages);
    }
  }
  
  const oldPathComps = path.join('src', 'components', oldFile);
  const newPathComps = path.join('src', 'components', newFile);
  if (fs.existsSync(oldPathComps)) {
    try {
      execSync(`git mv "${oldPathComps}" "${newPathComps}"`);
    } catch (e) {
      fs.renameSync(oldPathComps, newPathComps);
    }
  }
}

processDir('src');
console.log('Done');

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const frameworksDirectory = path.join(process.cwd(), 'src/frameworks');

export function getFrameworks() {
  const fileNames = fs.readdirSync(frameworksDirectory);
  const allFrameworks = fileNames.map((fileName) => {
    const fullPath = path.join(frameworksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      fileName,
      ...matterResult.data,
      content: matterResult.content,
    };
  });

  return allFrameworks;
}
const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = process.env.REPO_OWNER;
const repo = process.env.REPO_NAME;

// Маппинг имен папок на красивые названия категорий (можно дополнять)
const CATEGORY_NAMES = {
  'inthernet': 'Интернет и свобода',
  'useful-things': 'Учёба и развитие',
  'tools': 'Инструменты и Утилиты',
  'games': 'Игры и развлечения',
  'root': 'Главная'
};

async function getFirstCommitDate(filePath) {
  try {
    const { data } = await octokit.repos.listCommits({
      owner, repo, path: filePath, per_page: 1, direction: 'asc'
    });
    return data[0]?.commit?.committer?.date || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function findMarkdownFiles(dir, base = dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Игнорируем системные папки и папку .gitbook/assets если там нет статей
      if (['node_modules', '.github', '.git'].includes(entry.name)) continue;
      results.push(...findMarkdownFiles(full, base));
    } else if (entry.name.endsWith('.md') && !['README.md', 'SUMMARY.md', 'CHANGELOG.md'].includes(entry.name)) {
      results.push(path.relative(base, full));
    }
  }
  return results;
}

function extractIcon(content) {
  // Ищем строку вида "icon: network-wired" в первых 500 символах
  const match = content.substring(0, 500).match(/icon:\s*([a-zA-Z0-9-]+)/);
  if (match) {
    return `fas fa-${match[1]}`;
  }
  return 'fas fa-file-alt'; // Дефолтная иконка
}

function getCategoryName(folderPath) {
  if (folderPath === '.') return CATEGORY_NAMES['root'] || 'Статьи';
  const folderName = path.basename(folderPath).toLowerCase();
  return CATEGORY_NAMES[folderName] || folderName.charAt(0).toUpperCase() + folderName.slice(1).replace(/-/g, ' ');
}

(async () => {
  try {
    const files = findMarkdownFiles('.');
    const articles = [];

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Слаг: берем имя файла без расширения, нижний регистр, пробелы в дефисы
      const slug = path.basename(file, '.md').toLowerCase().replace(/\s+/g, '-');
      
      // Категория: имя родительской папки
      const dir = path.dirname(file);
      const category = getCategoryName(dir);
      
      const date = await getFirstCommitDate(file);
      const icon = extractIcon(content);

      // Заголовок
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1].trim() : path.basename(file, '.md');
      
      // Описание
      const contentWithoutTitle = content.replace(/^#.*$/m, '').replace(/^---[\s\S]*?---/, '').trim();
      const descMatch = contentWithoutTitle.match(/^([^\n#].+?)(?:\n\n|$)/s);
      const description = descMatch 
        ? descMatch[1].trim().replace(/\n/g, ' ').substring(0, 150) + '…' 
        : '';

      articles.push({
        title, 
        slug, 
        description, 
        category,
        icon,       // Добавили иконку
        content: content,
        date,
        path: file,
        tags: []
      });
    }

    // Сортировка: новые сверху
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2));
    console.log(`✓ Сгенерирован articles.json: ${articles.length} статей`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Ошибка генерации:', error.message);
    process.exit(1);
  }
})();

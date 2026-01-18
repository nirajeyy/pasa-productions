import * as fs from "fs";
import * as path from "path";

const CSV_PATH = path.join(process.cwd(), "content", "projects-template.csv");
const OUTPUT_DIR = path.join(process.cwd(), "content", "projects");

interface ProjectRow {
  slug: string;
  title: string;
  description: string;
  date: string;
  youtubeUrl: string;
  published: string;
  featured: string;
  category: string;
  client: string;
  duration: string;
  thumbnail: string;
  director: string;
  cinematographer: string;
  productionCompany: string;
  location: string;
  awards: string;
  credits: string;
  equipment: string;
  postProduction: string;
  content: string;
}

function parseCSV(csvContent: string): ProjectRow[] {
  const lines = csvContent.trim().split("\n");
  const headers = parseCSVLine(lines[0]);
  const rows: ProjectRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === 0 || (values.length === 1 && values[0] === "")) continue;

    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });
    rows.push(row as unknown as ProjectRow);
  }

  return rows;
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current.trim());

  return values;
}

function parseArrayField(value: string): string[] {
  if (!value || value.trim() === "") return [];
  return value.split("|").map((item) => item.trim()).filter(Boolean);
}

function parseCredits(value: string): { role: string; name: string }[] {
  if (!value || value.trim() === "") return [];
  return value.split("|").map((item) => {
    const [role, name] = item.split(":").map((s) => s.trim());
    return { role: role || "", name: name || "" };
  }).filter((c) => c.role && c.name);
}

function generateMDX(project: ProjectRow): string {
  const frontmatter: Record<string, unknown> = {
    title: project.title,
    description: project.description,
    date: project.date,
    published: project.published.toLowerCase() === "true",
  };

  // Optional string fields
  if (project.youtubeUrl) frontmatter.youtubeUrl = project.youtubeUrl;
  if (project.featured) frontmatter.featured = project.featured.toLowerCase() === "true";
  if (project.category) frontmatter.category = project.category;
  if (project.client) frontmatter.client = project.client;
  if (project.duration) frontmatter.duration = project.duration;
  if (project.thumbnail) frontmatter.thumbnail = project.thumbnail;
  if (project.director) frontmatter.director = project.director;
  if (project.cinematographer) frontmatter.cinematographer = project.cinematographer;
  if (project.productionCompany) frontmatter.productionCompany = project.productionCompany;
  if (project.location) frontmatter.location = project.location;

  // Array fields
  const awards = parseArrayField(project.awards);
  if (awards.length > 0) frontmatter.awards = awards;

  const credits = parseCredits(project.credits);
  if (credits.length > 0) frontmatter.credits = credits;

  const equipment = parseArrayField(project.equipment);
  if (equipment.length > 0) frontmatter.equipment = equipment;

  const postProduction = parseArrayField(project.postProduction);
  if (postProduction.length > 0) frontmatter.postProduction = postProduction;

  // Build YAML front matter
  let yaml = "---\n";
  yaml += formatYAML(frontmatter);
  yaml += "---\n";

  // Add content if present
  if (project.content && project.content.trim()) {
    yaml += "\n" + project.content.trim() + "\n";
  }

  return yaml;
}

function formatYAML(obj: Record<string, unknown>, indent = 0): string {
  let yaml = "";
  const spaces = "  ".repeat(indent);

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) continue;

    if (typeof value === "string") {
      // Quote strings that contain special characters
      if (value.includes(":") || value.includes("#") || value.includes("'") || value.includes('"') || value.includes("\n")) {
        yaml += `${spaces}${key}: "${value.replace(/"/g, '\\"')}"\n`;
      } else {
        yaml += `${spaces}${key}: ${value}\n`;
      }
    } else if (typeof value === "boolean" || typeof value === "number") {
      yaml += `${spaces}${key}: ${value}\n`;
    } else if (Array.isArray(value)) {
      yaml += `${spaces}${key}:\n`;
      for (const item of value) {
        if (typeof item === "object" && item !== null) {
          yaml += `${spaces}  - `;
          const entries = Object.entries(item);
          entries.forEach(([k, v], i) => {
            if (i === 0) {
              yaml += `${k}: ${v}\n`;
            } else {
              yaml += `${spaces}    ${k}: ${v}\n`;
            }
          });
        } else {
          yaml += `${spaces}  - ${item}\n`;
        }
      }
    }
  }

  return yaml;
}

function main() {
  // Check if CSV exists
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`CSV file not found: ${CSV_PATH}`);
    process.exit(1);
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Read and parse CSV
  const csvContent = fs.readFileSync(CSV_PATH, "utf-8");
  const projects = parseCSV(csvContent);

  console.log(`Found ${projects.length} projects in CSV\n`);

  let created = 0;
  let skipped = 0;

  for (const project of projects) {
    if (!project.slug || project.slug.trim() === "") {
      console.log(`Skipping row with empty slug`);
      skipped++;
      continue;
    }

    const filename = `${project.slug}.mdx`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const mdxContent = generateMDX(project);

    fs.writeFileSync(filepath, mdxContent, "utf-8");
    console.log(`Created: ${filename}`);
    created++;
  }

  console.log(`\nDone! Created ${created} MDX files, skipped ${skipped} rows.`);
}

main();

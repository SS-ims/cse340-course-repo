import express from 'express';
//provide consistent references regardless of where someone runs your application from
//create them yourself using the newer ES module system
import { fileURLToPath } from 'url';
import path from 'path';

// Define the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;
//import.meta.url gives the URL of the current module, fileURLToPath() converts that URL to a file system path
const __filename = fileURLToPath(import.meta.url);
//path.dirname() extracts just the directory portion
const __dirname = path.dirname(__filename);

const app = express();

/**
  * Configure Express middleware
  */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));

/**
  * Routes
  */
app.get('/', (req, res) => {
  // Render the home template with the title used by the shared header and page heading
  res.render('home', { title: 'CSE 340 Service Network' });
});

app.get('/organizations', (req, res) => {
  // Render the organizations template with its shared page title
  res.render('organizations', { title: 'Organizations' });
});

app.get('/projects', (req, res) => {
  // Render the projects template with its shared page title
  res.render('projects', { title: 'Projects' });
});

app.get('/categories', (req, res) => {
  // Render the categories template with its shared page title
  res.render('categories', { title: 'Categories' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});

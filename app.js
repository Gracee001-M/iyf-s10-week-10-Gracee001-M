// Send plain text
app.get('/text', (req, res) => {
    res.send('Plain text response');
});

// Send JSON
app.get('/json', (req, res) => {
    res.json({ message: 'JSON response', success: true });
});

// Send with status code
app.get('/error', (req, res) => {
    res.status(400).json({ error: 'Bad request' });
});

// Redirect
app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});

// Single parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Getting user ${userId}` });
});

// Multiple parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    res.json({ postId, commentId });
});

// Example: /search?q=hello&limit=10
app.get('/search', (req, res) => {
    const { q, limit = 10, page = 1 } = req.query;
    
    res.json({
        query: q,
        limit: parseInt(limit),
        page: parseInt(page)
    });
});

// Example: /posts?category=tech&sort=newest
app.get('/posts', (req, res) => {
    const { category, sort = 'newest' } = req.query;
    
    res.json({
        message: 'Getting posts',
        filters: { category, sort }
    });
});

const express = require('express');
const app = express();

// Example: Get all users with optional filters
app.get('/users', (req, res) => {
    const { role = 'all', active = true } = req.query;
    res.json({ message: 'Listing users', filters: { role, active } });
});

// Example: Get a single user by ID
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Fetching user ${userId}` });
});

// Example: Handle errors
app.get('/fail', (req, res) => {
    res.status(500).json({ error: 'Internal server error' });
});

// Example: Redirect old route
app.get('/home', (req, res) => {
    res.redirect('/dashboard');
});

app.listen(3000, () => console.log('Server running on port 3000'));


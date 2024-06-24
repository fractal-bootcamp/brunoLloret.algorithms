import express from 'express';

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 unless specified otherwise

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

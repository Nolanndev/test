import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>👋🏻 Hello Application !!</h1>
        <p>Un début de §paragraphe§</p>
        <p>// ✅ Ça à l'air de fonctionner</p>
    `);
})

const INTERNAL_PORT = process.env.PORT || 3000;
const EXTERNAL_PORT = process.env.EXTERNAL_PORT || INTERNAL_PORT;

app.listen(INTERNAL_PORT, () => {
    console.log(`Server is running on http://localhost:${EXTERNAL_PORT}`);
});
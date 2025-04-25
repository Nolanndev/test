import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Application!');
})

const INTERNAL_PORT = process.env.PORT || 3000;
const EXTERNAL_PORT = process.env.EXTERNAL_PORT || INTERNAL_PORT;

app.listen(INTERNAL_PORT, () => {
    console.log(`INTERNAL_PORT: ${INTERNAL_PORT}`);
    console.log(`EXTERNAL_PORT: ${EXTERNAL_PORT}`);
    console.log(`Server is running on http://localhost:${EXTERNAL_PORT}`);
});
const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send(`
        <h1>API Geradora de Senhas</h1>
        <p>Esta API gera senhas seguras e personalizadas com base nos parâmetros fornecidos.</p>

        <h2>Endpoint: /generate-password(POST)</h2>

        <h3>Parâmetros (JSON)</h3>
        <ul>
            <li><strong>length</strong> (inteiro, obrigatório): Comprimento da senha desejada. Valor padrão: 6.</li>
            <li><strong>uppercase</strong> (booleano, opcional): Indica se letras maiúsculas devem ser incluídas na senha. Valor padrão: true.</li>
            <li><strong>lowercase</strong> (booleano, opcional): Indica se letras minúsculas devem ser incluídas na senha. Valor padrão: true.</li>
            <li><strong>numbers</strong> (booleano, opcional): Indica se números devem ser incluídos na senha. Valor padrão: true.</li>
            <li><strong>specialChars</strong> (booleano, opcional): Indica se caracteres especiais devem ser incluídos na senha. Valor padrão: true.</li>
        </ul>

        <h3>Exemplo de Requisição (curl)</h3>
        <pre>
            curl -X POST -H "Content-Type: application/json" -d '{
                "length": 12,
                "uppercase": true,
                "lowercase": true,
                "numbers": true,
                "specialChars": true,
            }' http://localhost:3000/generate-password
        </pre>

        <h3>Exemplo de Resposta (JSON)</h3>
        <pre>
            {
            "password": "Y~pSOel8UX%$"
            }
        </pre>

        <h3>Códigos de Resposta</h3>
        <ul>
            <li><strong>200 OK</strong>: Senha(s) gerada(s) com sucesso.</li>
            <li><strong>400 Bad Request</strong>: Parâmetros inválidos ou ausentes.</li>
        </ul>
    `);
});

function generatePassword(length, uppercase, lowercase, numbers, specialChars) {
    let characterSet = '';
    if (uppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characterSet += '0123456789';
    if (specialChars) characterSet += '!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return password;
}
app.post('/generate-password', (req, res) => {
    const { length = 6, uppercase = true, lowercase = true, numbers = true, specialChars = true } = req.body;

    const password = generatePassword(length, uppercase, lowercase, numbers, specialChars);
    res.json({ password });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
# API Geradora de Senhas

Esta API gera senhas seguras e personalizadas com base nos parâmetros fornecidos.

## Endpoint

* `/generate-password` (POST)

## Descrição

Gera uma senha com base nos parâmetros especificados no corpo da requisição.

## Parâmetros (JSON)

* `length` (inteiro, obrigatório): Comprimento da senha desejada. Valor padrão: 6.
* `uppercase` (booleano, opcional): Indica se letras maiúsculas devem ser incluídas na senha. Valor padrão: `true`.
* `lowercase` (booleano, opcional): Indica se letras minúsculas devem ser incluídas na senha. Valor padrão: `true`.
* `numbers` (booleano, opcional): Indica se números devem ser incluídos na senha. Valor padrão: `true`.
* `specialChars` (booleano, opcional): Indica se caracteres especiais devem ser incluídos na senha. Valor padrão: `true`.

## Exemplo de Requisição (curl)

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "length": 12,
    "uppercase": true,
    "lowercase": true,
    "numbers": true,
    "specialChars": true
}' http://localhost:3000/generate-password

## Exemplo de Resposta (JSON)

\`\`\`json
{
    "password": "Y~pSOel8UX%$"
}
\`\`\`

## Códigos de Resposta

* **200 OK**: Senha gerada com sucesso.
* **400 Bad Request**: Parâmetros inválidos ou ausentes.

## Possíveis melhorias

* Adicionar validações mais robustas para os parâmetros de entrada.
* Implementar tratamento de erros mais detalhado.
* Adicionar opções de complexidade da senha (fraca, média, forte).
* Permitir a exclusão de caracteres ambíguos.
* Implementar autenticação para a API.
* Adicionar mais formatos de resposta (XML, YAML).
* Implementar uma interface web para a API.

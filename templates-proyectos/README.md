1. Instalar prettier con:

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

2. Instalar y configurar eslint con:

```bash
npx eslint --init
```

3. Configuración de Prettier por defecto:

```json
{
  "endOfLine": "auto",
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

4. En `eslintrc.cjs` añadir siempre como último elemento de `extends` lo siguiente:

```
'plugin:prettier/recommended'
```

5. Añadir en `eslintrc.cjs` como `rules` lo siguiente:

```json
{
  "rules": {
    "prettier/prettier": "error"
  }
}
```

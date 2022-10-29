Al siguiente javascript no funciona como deberia...podrias arreglarlo?

Deberia de imprimir por consola "Peter".

```js
const user = { name: "Peter", surname: "Parker" };

function a(user) {
  const nama = b(user.nama);
  console.log(nama);
}

function b(name) {
  return "Hello " + name;
}

a(user);
```

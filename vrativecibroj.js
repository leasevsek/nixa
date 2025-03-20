Evo jednostavne JavaScript funkcije koja prima dva broja i vraća veći od ta dva broja, a ako su jednaki – vraća prvi:

```javascript
function vratiVeciIliPrvi(num1, num2) {
  if (num1 === num2) {
    return num1; // ako su isti, vrati prvi
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
```

# smlcode

---

This is a small package to create a custom code.

<br>

```ts
import { smlCode } from 'smlcode';

const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

console.log(smlCode(5, 8, chars));
//Expected Output (ONLY an example): a4kf9rh7-c58g94dk-p5kl4aso-bz6pcdlt-1qu5dk2c
```

---

#### Warning:

You will get an Error, if you use the function without defining both Values.
You will als get an TypeError, if one one the Values is not a number. (You will get an TypeError, if the characters Value is not a string)

---

## Documentation:

- #### smlCode(section, innersection, characters):
    - ##### section: A number >= 1
    - ##### innersection: A number >= 1
    - ##### characters: A custom string with a minimum of 1 character (It's recommended to use at least 10 different characters)
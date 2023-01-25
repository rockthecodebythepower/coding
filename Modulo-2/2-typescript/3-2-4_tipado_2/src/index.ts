// "3.2.4 Typescript - Tipado 2"

// variable any
    let myAnyVariable: any;
    // OJO!
    // todo lo siguiente explota aunque al codificar no dé error
        // myAnyVariable.split('');
        // myAnyVariable.toFixed(2);
        // myAnyVariable.map(() => {});

// Alternativa. Pero usar sólo para solucionar problemas

    let myAnyVariableGood: unknown; // con unknown evitamos que TScript le asigne un tipo
                                    // esto se puede castear, y
    // Castear es decirle a Typescript que esta variable 
    // que es de un tipo antes es de otro tipo despues con 'as'
        (myAnyVariableGood as string).split(''); 
        (myAnyVariableGood as number).toFixed(2);
        (myAnyVariableGood as []).map(() =>  {});
        // esto de arriba sigue sin funcionar porque el valor es unknown pero el casteo es OK


// Tipado de ARRAYS []

    const myArr: string[] = ['a', 'b', 'c']
      myArr.push('d'); // ok
      // myArr.push(2); // no se puede meter un número en un array de strings
     // myArr.push(true); // fallará porque no es un tipo válido
     console.log(myArr);

// si quiero un array que tenga strings y números
    const myArrayCombinado: (string | number)[] = ['a', 'b', 'c'];
    const myArrayElegante: Array<string | number > = ['a', 'b', 'c'];
    // son lo mismo


// 0j0! donde pongo los []
    // const mixedArrayError: [string] = ['a', 2, 'c']; 
    //mal porque tipamos un único valor string y le asignamos 3 valores. 
    const mixedArrayCorrect: [string, number, string] = ['a', 2, 'c'];



// Tipado de OBJETOS {} , lo veremos mejor en la siguiente lección
    const myObject : {      // NO USAR const myObject: object = { }
        animal: string;
        vehicle: string;
    } = {   animal: 'dog',
            vehicle: 'car',
           // home: 'house', // NO es VALIDO porque no está tipado
    };

    

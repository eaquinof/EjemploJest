const sum = require('../src/sum');

//No es obligatorio pero es util para tener las pruebas organizadas por grupos
describe('Pruebas para suma',()=>
{
    test('1 + 2 is 3', () => {
        expect(sum(1,2)).toBe(3)
      })

      //Alias de test
      it('1 + 2 debe retornar 3', () => {
        expect(sum(1,2)).toBe(3)
      })

    test('1 +(-2) = -1',()=>{
        expect(sum(1,-2)).toBe(-1)
    })

    test('-1 + (-2) = -3',()=>{
        expect(sum(-1,-2)).toBe(-3)
    })
/*
    test('-2 + (-2) = -4',()=>{
        expect(sum(-2,-2)).toBe(-3) //En este caso voy a forzar que la prueba sea fallida
    })
*/
})
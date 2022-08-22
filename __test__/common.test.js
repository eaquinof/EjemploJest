
    test('2 + 2 = 3', () => {
        expect(2+2).toBe(4)
      })

      test('object validation', () => {
        const data = {username: 'eaquino'}
        const data2 = {username: 'edgar'}

        expect(data).toEqual({username: 'eaquino'})
        expect(data).not.toEqual(data2)
      })
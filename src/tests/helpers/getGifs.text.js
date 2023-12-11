import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs()', () => { 

    test('should debe retornar un arreglo de Gifs', async() => { 
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(string),
            title:expect.any(string),
            url:expect.any(string)
        })
         })




 })
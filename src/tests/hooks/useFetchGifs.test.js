import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('pruebas en el hoock useFetchGifs', () => { 
    test('should regresar el estado inicial', () => { 
        
    const { result } = renderHook(()=> useFetchGifs('One Punch'))
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
    });








    test('should retornar una rreglo de imagenes y el isLoading en false', async() => { 
        
        const { result } = renderHook(()=> useFetchGifs('One Punch'))
    
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)

            // ,{
            //     timeout: 1.1
            // }
        );

        const{images,isLoading} = result.current;
    
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    
         })
 })
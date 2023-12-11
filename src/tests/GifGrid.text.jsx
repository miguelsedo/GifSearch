import { render, screen } from '@testing-library/react';
import { GifGrid } from "../components";
import { useFetchGifs } from '../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch'
    
    test('debed e mostrar el loading inicialmente', () => { 
        
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });



    test('should mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url:'https://localhost/goku.jpg'
            }
        ]


        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
            
            
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);


        })

 })
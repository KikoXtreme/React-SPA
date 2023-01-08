import { Form } from '../components/Form/Form'
import { ReactDOM } from 'react-dom/client';

// describe('First tests', () => {
//     it('Should pass always', () => {
//         expect(true).toBe(true);
//     })

//     it('two plus two is four', () => {
//         expect(2 + 2).toBe(4);
//     });
// })

it('two plus two is four', () => {
    const root = ReactDOM.createRoot(document.createElement('p'));
    root.render(<Form text='Kiko' />)


    expect(2 + 2).toBe(4);
});


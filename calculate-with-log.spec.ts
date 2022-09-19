import {calculate} from './calculate-with-log'

describe('calculate1', () => { 
    it('calls the logger every time',()=>{
        let logged;
        calculate(1,2,(text)=>logged = text);
        expect(logged).toBe(3);
    })

 })
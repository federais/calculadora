import { useState } from 'react'
import '../style.css'
import { toast } from 'react-toastify'

import Form from '../../../components/forms'

function App() {
    const [valorA, setvalorA] = useState('')
    const [valorB, setvalorB] = useState('')
    const [valorC, setValorC] = useState('')

    function handleSubmit(e) {
        const resultadoInput = document.querySelector('#resultado')
        let response = 0
        const delta = (valorB ** 2) - (4 * valorA * valorC)

        if (delta < 0) {
            response = 'Delta menor que 0'
            return resultadoInput.value = response
        }

        const x1 = (Math.sqrt(delta) - valorB) / (2 * valorA)
        const x2 = (Math.sqrt(delta) - valorB) / (2 * valorA)

        response = `Δ=${delta} | X1=${x1.toFixed(1)} | X2= ${x2.toFixed(1)}`
        resultadoInput.value = response
    }

    return (
        <>
            <Form
                title="Baschara"
                input1="Valor A" value1={valorA} setValue1={setvalorA}
                input2="Valor B" value2={valorB} setValue2={setvalorB}
                input3="Valor C" value3={valorC} setValue3={setValorC}
                handleSubmit={handleSubmit}
            />
        </>
    )
}
export default App
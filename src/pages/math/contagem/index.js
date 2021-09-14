import { useState } from 'react'
import '../style.css'
import { toast } from 'react-toastify'
import { factorial } from 'mathjs'

import Form from '../../../components/forms'

function App() {
    const [valorA, setvalorA] = useState('')
    const [valorB, setvalorB] = useState('')

    function handleSubmit(e) {
        const resultadoInput = document.querySelector('#resultado')
        let resultado = 0

        resultado = factorial(valorA) / (factorial(valorB) * factorial(valorA - valorB))
        resultadoInput.value = resultado
    }

    return (
        <>
            <Form
                blankSpace={true}
                title="Contagem"
                input1="Primeiro Valor" value1={valorA} setValue1={setvalorA}
                input2="Segundo Valor" value2={valorB} setValue2={setvalorB}
                handleSubmit={handleSubmit}
            />
        </>
    )
}
export default App
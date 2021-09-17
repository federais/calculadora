import { useState } from 'react'
import '../style.css'
import { toast } from 'react-toastify'
import { factorial } from 'mathjs'

import Form from '../../../components/forms'

function App() {
    const [angulo, setangulo] = useState('')

    function handleSubmit(e) {
        const resultadoInput = document.querySelector('#resultado')
        let resultado = 0
        const pi = Math.PI

        const anguloRad = (angulo * (pi / 180))
        resultado = `cos: ${Math.cos(anguloRad).toFixed(3)} | Sen: ${Math.sin(anguloRad).toFixed(3)} | Tg: ${Math.tan(anguloRad).toFixed(3)}`
        resultadoInput.value = resultado
    }

    return (
        <>
            <Form
                blankSpace={true}
                title="Contagem"
                input1="Digite o valor do angulo" value1={angulo} setValue1={setangulo}
                handleSubmit={handleSubmit}
            />
        </>
    )
}
export default App
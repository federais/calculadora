import { useState } from 'react'
import '../style.css'
import { toast } from 'react-toastify'

function App() {
    const [cateto1, setCateto1] = useState('')
    const [cateto2, setCateto2] = useState('')
    const [hipotenusa, setHipotenusa] = useState('')

    function handleSubmit(e) {
        const resultadoInput = document.querySelector('#resultado')
        let response = 0
        switch ('') {
            case cateto1:
                response = Math.sqrt(hipotenusa ** 2 - cateto2 ** 2)
                resultadoInput.value = response
                break

            case cateto2:
                response = Math.sqrt(hipotenusa ** 2 - cateto1 ** 2)
                resultadoInput.value = response
                break

            case hipotenusa:
                response = Math.sqrt(cateto1 ** 2 + cateto2 ** 2)
                resultadoInput.value = response
                break

            default:
                toast.error('Ops! Chegue novamente seus inputs')
                break
        }
    }

    return (
        <div className="rootMatematica" >
            <p>Pitagoras</p>

            <small>Deixe em branco o valor que deseja obter</small>
            <div class="form__group field">
                <input type="number" class="form__field" placeholder="Cateto 1" id='cateto1' value={cateto1} onChange={e => setCateto1(e.target.value)} />
                <label for="cateto 1" class="form__label">Cateto 1</label>
            </div>
            <div class="form__group field">
                <input type="number" class="form__field" placeholder="Cateto 2" id='cateto2' value={cateto2} onChange={e => setCateto2(e.target.value)} />
                <label for="cateto 2" class="form__label">Cateto 2</label>
            </div>
            <div class="form__group field">
                <input type="number" class="form__field" placeholder="Hipotenusa" id='hipotenusa' value={hipotenusa} onChange={e => setHipotenusa(e.target.value)} />
                <label for="hipotenusa" class="form__label">Hipotenusa</label>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <button id="gooey-button" onClick={e => handleSubmit(e)} >
                Calcular
                <span class="bubbles">
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                    <span class="bubble"></span>
                </span>
            </button>


            <div class="form__group field">
                <input type="number" disabled class="form__field" placeholder="Resultado" id='resultado' />
                <label for="resultado" class="form__label blocked ">Resultado</label>
            </div>

        </div>
    )
}
export default App
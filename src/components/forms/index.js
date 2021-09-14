function Forms(props) {
    return (
        <>
            <div className="rootMatematica" >
                <p>{props.title}</p>

                <small>Deixe em branco o valor que deseja obter</small>
                <div className="form__group field">
                    <input type="number" className="form__field" placeholder={props.input1} id='cateto1' value={props.value1} onChange={e => props.setValue1(e.target.value)} />
                    <label for={props.input1} className="form__label">{props.input1}</label>
                </div>
                <div className="form__group field">
                    <input type="number" className="form__field" placeholder={props.input2} id='cateto2' value={props.value2} onChange={e => props.setValue2(e.target.value)} />
                    <label htmlFor={props.input2} className="form__label">{props.input2}</label>
                </div>
                <div className="form__group field">
                    <input type="number" className="form__field" placeholder={props.input2} id={props.input2} value={props.value3} onChange={e => props.setValue3(e.target.value)} />
                    <label htmlFor="{props.input2}" className="form__label">{props.input2}</label>
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

                <button id="gooey-button" onClick={e => props.handleSubmit(e)} >
                    Calcular
                    <span className="bubbles">
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                    </span>
                </button>


                <div className="form__group field">
                    <input type="text" disabled className="form__field" placeholder="Resultado" id='resultado' />
                    <label for="resultado" className="form__label blocked ">Resultado</label>
                </div>

            </div>
        </>
    )
}

export default Forms
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = () => {
    return (
        <div>
            <div className='container border mt-2'>
                <div className='row'>
                    <h1 className='text-center'>Seu pedido...</h1>
                </div>
                <div className='row mb-2'>
                    <div className='col-xl-3 col-md-6  mb-2'>
                        <div className="border p-5" align='center'>Pedido 1</div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 2</div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 3</div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 4</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 5</div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 6</div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 7</div>
                    </div>
                    <div className='col-xl-3 col-md-6 mb-2'>
                        <div className="border p-5" align='center'>Pedido 8</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
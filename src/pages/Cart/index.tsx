export function Cart() {
    return (
        <div className='w-full max-w-7xl mx-auto '>
            <h1 className='font-medium text-2xl text-center my-4'>Carrinho de compras</h1>

            <section className='flex items-center justify-between border-b-2 border-gray-300'>
                <img
                    className='w-28'
                    src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Logo produto"
                />

                <strong>Preço: R$500</strong>

                <div className='flex items-center justify-center gap-3'>
                    <button className='bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center'>
                        -
                    </button>
                    <span>2</span>
                    <button className='bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center'>
                        +
                    </button>
                    <strong className='float-right'>
                        subtotal: R$500
                    </strong>
                </div>
            </section>

            <p className='font-bold mt-4'>Total: R$500</p>
        </div>
    )
}
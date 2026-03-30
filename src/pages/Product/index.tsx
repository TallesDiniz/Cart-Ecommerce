import { api } from '../../services/api';
import { useState, useEffect, useContext } from 'react'
import type { ProductsProps } from '../Home';
import { useParams, useNavigate } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs'
import toast from 'react-hot-toast';
import { CartContext } from '../../context/CartContext';

export function Product() {
    const [product, setProduct] = useState<ProductsProps>()
    const { id } = useParams<{ id: string }>()
    const [loading, setLoading] = useState(true)
    const { addItemCart } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await api.get(`/products/${id}`)
                setProduct(response.data)
            } catch (error) {
                console.error(error)
                toast.error('produto não encontrado!')
                navigate('/')
            } finally {
                setLoading(false)
            }


        }
        getProduct();
    }, [id])

    function handleAddCartItem(product: ProductsProps) {
        toast.success('Produto adicionado ao carrinho!', {
            style: {
                borderRadius: 10,
                backgroundColor: '#121212',
                color: '#fff'
            }
        })
        addItemCart(product)

        navigate('/cart')
    }

    if (loading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <p className='font-medium text-2xl'>Carregando...</p>
            </div>
        )
    }

    if (!product) return null



    return (
        <div>
            <main className='w-full max-w-7xl mx-auto px-4 my-6'>
                {product && (
                    <section className='w-full'>
                        <div className='flex flex-col lg:flex-row'>
                            <img
                                src={product.cover}
                                alt={product.title}
                                className='flex-1 w-full max-h-72 object-contain'
                            />

                            <div className='flex-1'>
                                <h1 className='font-bold text-2xl mb-2 mt-4'>{product.title}</h1>
                                <p className='my-4'>{product.description}</p>

                                <strong className='text-zinc-700/90 text-xl'>{product.price.toLocaleString('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                })}</strong>
                                <button onClick={() => handleAddCartItem(product)} className='bg-zinc-900 p-1 ml-3 rounded cursor-pointer'>
                                    <BsCartPlus size={20} color="#fff" />
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}
import { useEffect, useState } from "react"

export default function Header() {
    const [color, setColor] = useState('Simple Hex')

    useEffect(() => {
        const changeName = document.querySelector('.hex')
        const handleClick = () => {
            color === 'Simple Hex' ? setColor('Color') : setColor('Simple Hex')
        }
        changeName?.addEventListener("click", handleClick)
        return () => {
            changeName?.removeEventListener("click", handleClick)
        }
    }, [color])
    return (
        <section className='flex justify-evenly py-5 font-bold bg-white'>
            <h1 className='text-blue-400 '>Color Flipper</h1>
            <h1 className='hex cursor-pointer text-blue-400'>{color}</h1>
        </section>
    )
}


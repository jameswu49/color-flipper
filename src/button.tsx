import { useEffect } from 'react';

export default function Button() {
    useEffect(() => {
        const button = document.querySelector('button')!;
        const color = document.querySelector('.color')!
        const handleClick = () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
            color.innerHTML = " #" + randomColor
        };
        button.addEventListener('click', handleClick);

        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <button className="mt-5 button border-black border-2 px-3 py-3 rounded font-bold">CLICK ME</button>
    );
}

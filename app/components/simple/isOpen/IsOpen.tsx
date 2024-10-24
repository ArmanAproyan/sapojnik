'use client'
import { useEffect, useState } from "react";
const IsOpen = () => {
    const [isOpenShop, setIsOpenShop] = useState({
        isOpen: false,
        text: '...'
    });

    

    const showIsOpen = () => {
        const data = new Date();
        const hours = data.getHours();
        if(hours >= 9 && hours <= 19) {
            setIsOpenShop({
                isOpen: true,
                text: 'Открыто'
            })
        }
        else {
            setIsOpenShop({
                isOpen: true,
                text: 'Закрыто'
            })
        }
    };


    useEffect(() => {
        showIsOpen()
    },[])

    return (
        <div>
            <b>Сейчась </b>
            <span style={{color: isOpenShop ? 'green': 'red'}}>{isOpenShop.text}</span>
        </div>
    )
};



export default IsOpen
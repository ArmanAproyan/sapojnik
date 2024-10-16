'use client'
import { useEffect, useState } from "react";
const IsOpen = () => {
    const [isOpenShop, setIsOpenShop] = useState<boolean>(false);

    const showIsOpen = () => {
        const data = new Date();
        const hours = data.getHours();
        if(hours >= 9 && hours <= 19) {
            setIsOpenShop(true)
        }
        else {
            setIsOpenShop(false)
        }
    };

    useEffect(() => {
        showIsOpen()
    },[])

    return (
        <div>
            {isOpenShop ? <b>Сейчась <span style={{color:"green"}}>Открыто</span> </b>: <b>Сейчась <span style={{color:"red"}}>Закрыто</span> </b>}
        </div>
    )
};



export default IsOpen
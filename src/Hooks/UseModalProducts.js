import { useState } from 'react';

export const UseModalProducts = (initialValue = false) => {
    const [isOpen, setisOpen] = useState(initialValue);

    const openModal = () => {
        setisOpen(true);
    };

    const closeModal = () => {
        setisOpen(false);
    };

    return [isOpen, openModal, closeModal];
}

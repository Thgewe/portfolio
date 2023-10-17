import React from 'react';
import cl from './contacts.module.css';

const Contacts = () => {
    const copyOnClick = (e) => {
        if (e.target.className === cl.list)
            return

        navigator
            .clipboard
            .writeText(
                e.target.getAttribute('data-copy')
            );
    }
    return (
        <section className={cl.contacts}>
            <div className={cl.container}>
                <h3>CONTACT</h3>
                <ul className={cl.list} onClick={copyOnClick}>
                    <li title={'Копировать'} data-copy={'@thgewe'}>
                        <span>telegram:</span> @thgewe
                    </li>
                    <li title={'Копировать'} data-copy={'hanhatov@mail.ru'}>
                        <span>mail:</span> hanhatov@mail.ru
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contacts;
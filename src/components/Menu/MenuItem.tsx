import React from 'react';
import './Menu.scss';

interface Props {
    id: number,
    title: string,
    content: string,
    items: {
        item_name: string,
        item_description: string,
        item_price: string
    }[]
}

const MenuItem: React.FC<Props> = ({ id, title, content, items}) => {
  return (
    <article className="menu-item-container flex">
        <header className='menu-item-header'>
            <h1 className="entry-title"><span>~</span>{`${title}`}<span>~</span></h1>
            <p>{`${content}`}</p>
        </header>
        <div className="menu-items">
            {items.map(item => {
                return (
                    <div className="item-card">
                        <h3 className='item-card-title'>{`${item.item_name}`}</h3>
                        <p>{`${item.item_description}`}</p>
                        <p>{`${item.item_price}`}</p>
                    </div>
                );
            })
            }
        </div>
    </article>
  )
}

export default MenuItem
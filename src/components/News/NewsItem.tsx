import React from 'react'

interface Props {
    id: number,
    title: string,
    content: string,
    image: string,
    image_set: string,
    video: string,
    comments: number,
    written: string
}

const NewsItem: React.FC<Props> = ({ id, title, content, image, image_set, video, comments, written}) => {
  return (
    <article className='news-item-container'>
        <img src={image} srcSet={image_set} alt="" />
        <div className="news-item-content flex">
            <header>
                <h1>{title}</h1>
            </header>
            <div className='news-item-body flex'>
            { comments ? 
                <div className='left-content'>
                    <span>Featured</span>
                    <span>{comments} Comment</span>
                </div> 
                :
                <span className='left-content'>{written}</span>
            }
                <p className='item-content'>{content}</p>
            </div>
        </div>
    </article>
  )
}

export default NewsItem
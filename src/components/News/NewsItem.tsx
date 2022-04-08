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
        {image && <img src={image} srcSet={image_set} alt="" />}
        <div className="news-item-content flex">
            <header>
                <h1 className='item-title'>{title}</h1>
            </header>
            <div className='news-item-body flex'>
            { comments ? 
                <div className='left-content'>
                    <span className='featured-post'>Featured</span><br />
                    <span className='comments'>{comments} Comment</span>
                </div> 
                :
                (written && <span className='left-content item-date'>{written}</span>)
            }
                {content && <p className='item-content'>{content}</p>}
                { video && (<video src={video} controls></video>)}
            </div>
            
        </div>
    </article>
  )
}

export default NewsItem
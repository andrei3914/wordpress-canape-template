import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const ImageAlignment = () => {
  return (
    <div>
        <Navigation />
        <div className='alignment-container flex'>
            <header>
                <h1 className='entry-title'>Image Alignment and Styles</h1>
                <p>This page is filled with sample content illustrating what various image types look like. Text is lorem ipsum filler; look at the Readability page for sample content that you can actually read.</p>
            </header>
            <div className="hero">
                <h2 className='entry-title'>Right-aligned Medium</h2>
                <div>
                    <img src="https://demoxmlblog.files.wordpress.com/2011/07/mcm_6965.jpg?w=300&h=199" alt="" className='float-right'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iste debitis temporibus deserunt molestias quae, expedita obcaecati quam cumque esse optio necessitatibus? Ullam, pariatur recusandae! Voluptatum nihil nemo laboriosam ut.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio cupiditate tempore qui deleniti, nemo aspernatur sed nostrum quas pariatur iusto officiis error blanditiis voluptas. Perspiciatis distinctio est iusto ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio cupiditate tempore qui deleniti, nemo aspernatur sed nostrum quas pariatur iusto officiis error blanditiis voluptas. Perspiciatis distinctio est iusto ea?
                    </p>
                </div>
            </div>
            <div className="shoe-section">
                <h2 className='entry-title'>Left-aligned Medium</h2>
                <div>
                    <img src="https://demoxmlblog.files.wordpress.com/2011/07/mcm_2432-e1264268646918.jpg?w=225&h=300" alt="" className='float-left'/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores autem animi alias inventore libero excepturi expedita recusandae placeat vero quo. Aliquid ab vero ipsum voluptates unde maiores vitae, reiciendis ea!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio cupiditate tempore qui deleniti, nemo aspernatur sed nostrum quas pariatur iusto officiis error blanditiis voluptas. Perspiciatis distinctio est iusto ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae odio cupiditate tempore qui deleniti, nemo aspernatur sed nostrum quas pariatur iusto officiis error blanditiis voluptas. Perspiciatis distinctio est iusto ea?
                    </p>
                </div>
            </div>
            <div className="lion-section">
                <h2 className='entry-title'>Full-Width</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut qui reiciendis facere laudantium soluta possimus repellat minima id cum cupiditate hic ex, dicta optio quis quo exercitationem saepe ipsa culpa?</p>
                <img src="https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=620&h=412" alt="" sizes='(max-width: 620px) 100vw, 620px' className='align-center'
                    srcSet='https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=620&h=412 620w, https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=1240&h=824 1240w, https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=150&h=100 150w, https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=300&h=200 300w, https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=768&h=511 768w, https://canapedemo.files.wordpress.com/2011/07/mcm_3162.jpg?w=1024&h=681 1024w'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam natus cum nostrum eum ratione aperiam odit distinctio ab reprehenderit harum! Suscipit quam, quibusdam tenetur magnam expedita laboriosam id doloribus corporis.</p>
            </div>
            <div className="caption-section">
                <h2 className='entry-title'>Images with captions</h2>
                
                <div>
                    <figure className='float-right'>
                        <img src="https://canapedemo.files.wordpress.com/2011/07/img_0429.jpg?w=300&h=200" alt="" sizes='(max-width: 300px) 100vw, 300px'
                            srcSet='https://canapedemo.files.wordpress.com/2011/07/img_0429.jpg?w=300&h=200 300w, https://canapedemo.files.wordpress.com/2011/07/img_0429.jpg?w=600&h=400 600w, https://canapedemo.files.wordpress.com/2011/07/img_0429.jpg?w=150&h=100 150w'/>
                        <figcaption>Jellyfish</figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nisi ab perspiciatis. Sapiente, expedita, nulla nostrum deserunt doloribus voluptatibus ut distinctio amet, architecto consequuntur nesciunt. Tenetur repellendus reprehenderit soluta accusantium!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nisi ab perspiciatis. Sapiente, expedita, nulla nostrum deserunt doloribus voluptatibus ut distinctio amet, architecto consequuntur nesciunt. Tenetur repellendus reprehenderit soluta accusantium!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nisi ab perspiciatis. Sapiente, expedita, nulla nostrum deserunt doloribus voluptatibus ut distinctio amet, architecto consequuntur nesciunt. Tenetur repellendus reprehenderit soluta accusantium!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nisi ab perspiciatis. Sapiente, expedita, nulla nostrum deserunt doloribus voluptatibus ut distinctio amet, architecto consequuntur nesciunt. Tenetur repellendus reprehenderit soluta accusantium!
                    </p>

                </div>
                
            </div>
            <div className="thumbnails-section flex">
                <h2 className='entry-title'>Thumbnails</h2>
                <div className='first-entry'>
                    <img src="https://canapedemo.files.wordpress.com/2011/07/mcm_2160.jpg?w=150&h=99" alt="" sizes='(max-width: 150px) 100vw, 150px' className='float-right'
                        srcSet='https://canapedemo.files.wordpress.com/2011/07/mcm_2160.jpg?w=150&h=99 150w, https://canapedemo.files.wordpress.com/2011/07/mcm_2160.jpg?w=298&h=198 298w'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at delectus, ducimus totam optio autem omnis cum dolor harum rerum, et tempora nisi. Eveniet praesentium quis ipsa dignissimos ex facilis.</p>
                </div>
                <div className='second-entry'>
                    <img src="https://canapedemo.files.wordpress.com/2011/07/mcm_7007.jpg?w=150&h=99" alt="" sizes='(max-width: 150px) 100vw, 150px' className='float-left'
                        srcSet='https://canapedemo.files.wordpress.com/2011/07/mcm_7007.jpg?w=150&h=99 150w, https://canapedemo.files.wordpress.com/2011/07/mcm_7007.jpg?w=298&h=198 298w' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam possimus quis laborum sit unde omnis, minus necessitatibus, asperiores, voluptates sequi illo delectus in totam molestias maiores eum consectetur corrupti?</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ImageAlignment
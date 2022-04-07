import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const HtmlElements = () => {
  return (
    <div>
        <Navigation />
        <div className="html-elements">
            <div className="hero">
                <h1>HTML Elements</h1>
                <p>
                    Below is just about every <abbr title='HyperText Markup Language'>HTML</abbr> element you might want to use in your blog posts. Check the source code to see the many embedded elements within paragraphs.
                </p>
            </div>
            <div className="headings">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, <a href='#'>test link</a> adipiscing elit. <strong>This is strong</strong>. Nullam dignissim convallis est. 
                    Quisque aliquam. <em>This is emphasized</em>. Donec faucibus. Nunc iaculis suscipit dui. 5<sup>3</sup> = 125. Water is H<sub>2</sub>O. 
                    Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>The New York Times</cite> (That’s a citation).
                    <span style={{textDecoration: 'underline'}}>Underline</span>. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. 
                    Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. <abbr title="HyperText Markup Language">HTML</abbr>
                    and <abbr title="Cascading Style Sheets">CSS</abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. 
                    Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                    To copy a file type <code>COPY <var>filename</var></code>.</p>
                <p><del>Dinner’s at 5:00.</del>
                    <ins>Let’s make that 7.</ins></p>
                <p>This <span style={{textDecoration: 'line-through'}}>text</span> has been struck.</p>
            </div>
            <div className="list-types">
                <h2>List Types</h2>
                <h3>Definition List</h3>
                <dl>
                    <dt>Definition List Title</dt>
                    <dd>This is a definition list division</dd>

                    <dt>Definition</dt>
                    <dd>An exact statement or description of the nature, scope, or meaning of something: <em>our definition of what constitutes poetry.</em></dd>
                </dl>
                <h3>Ordered List</h3>
                <ol>
                    <li>List Item 1</li>
                    <li>List Item 2
                        <ol>
                            <li>Nested list item A</li>
                            <li>Nested list item B</li>
                        </ol>
                    </li>
                    <li>List Item 3</li>
                </ol>
                <h3>Unordered List</h3>
                <ul>
                    <li>List Item 1</li>
                    <li>List Item 2
                        <ul>
                            <li>Nested list item A</li>
                            <li>Nested list item B</li>
                        </ul>
                    </li>
                    <li>List Item 3</li>
                </ul>
            </div>
            <div className="table">
                <h2>Table</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Table Header 1</th>
                            <th>Table Header 2</th>
                            <th>Table Header 3</th>
                        </tr>
                        <tr>
                            <td>Division 1</td>
                            <td>Division 2</td>
                            <td>Division 3</td>
                        </tr>
                        <tr>
                            <td>Division 1</td>
                            <td>Division 2</td>
                            <td>Division 3</td>
                        </tr>
                        <tr>
                            <td>Division 1</td>
                            <td>Division 2</td>
                            <td>Division 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="preformatted">
                <h2>Preformatted Text</h2>
                <p>Typographically, preformatted text is not the same thing as code. Sometimes, a faithful execution of the text requires preformatted text that may not have anything to do with code. For example:</p>
                <pre>
                “Beware the Jabberwock, my son!<br />
                    The jaws that bite, the claws that catch!<br />
                Beware the Jubjub bird, and shun<br />
                    The frumious Bandersnatch!”<br />
                </pre>

                <h3>Code</h3>
                <p>{`Code can be presented inline, like <?php bloginfo('stylesheet_url'); ?>, or within a <pre> block.`}</p>
                <pre>
                    <code>
                        {`#container { float: left; margin: 0 -240px 0 0; width: 100%; }`}
                    </code>
                </pre>
            </div>
            <div className="blockquotes">
                <h2>Blockquotes</h2>
                <p>Let's keep it simple.</p>
                <blockquote>
                    <p>Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992. My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you.</p>
                    <cite>- <a href="https://en.wikipedia.org/wiki/HAL_9000">HAL 9000</a></cite>
                </blockquote>
                
                <p>And here's a bit of trailing text.</p>
                <h2>LaTeX</h2>
                <h3>Inline</h3>
                <p>
                    Hello <img src='https://s0.wp.com/latex.php?latex=LaTeX&bg=ffffff&fg=404040%3B&s=0&c=20201002' alt=''/>, <a href="http://en.support.wordpress.com/latex/">how are you?</a>
                </p>
                <p>This has a superscript <img src="https://s0.wp.com/latex.php?latex=M%5EM&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /> in it.</p>
                <p>This has a subscript <img src="https://s0.wp.com/latex.php?latex=W_W&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /> in it.</p>
                <p>This has both <img src="https://s0.wp.com/latex.php?latex=M%5EM_M&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /> zomg.</p>
                <p>Getting crazy <img src="https://s0.wp.com/latex.php?latex=M%5E%7BM_M%7D&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /> woo.</p>
                <p>Hey now <img src="https://s0.wp.com/latex.php?latex=M_%7BM%5EM%7D&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /> stop it.</p>
                <p>One more: <img src="https://s0.wp.com/latex.php?latex=M%5EM_M++M%5E%7BM_M%7D+M_%7BM%5EM%7D&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /></p>
                <p>Here's a fancy formula <img src="https://s0.wp.com/latex.php?latex=displaystyle+P_nu%5E%7B-mu%7D%28z%29%3Dfrac%7Bleft%28z%5E2-1right%29%5E%7Bfrac%7Bmu%7D%7B2%7D%7D%7D%7B2%5Emu+sqrt%7Bpi%7DGammaleft%28mu%2Bfrac%7B1%7D%7B2%7Dright%29%7Dint_%7B-1%7D%5E1frac%7Bleft%281-t%5E2right%29%5E%7Bmu+-frac%7B1%7D%7B2%7D%7D%7D%7Bleft%28z%2Btsqrt%7Bz%5E2-1%7Dright%29%5E%7Bmu-nu%7D%7Ddt&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /> inline.</p>
                <p>A more different fancy formula <img src="https://s0.wp.com/latex.php?latex=P_nu%5E%7B-mu%7D%28z%29%3Dfrac%7Bleft%28z%5E2-1right%29%5E%7Bfrac%7Bmu%7D%7B2%7D%7D%7D%7B2%5Emu+sqrt%7Bpi%7DGammaleft%28mu%2Bfrac%7B1%7D%7B2%7Dright%29%7Dint_%7B-1%7D%5E1frac%7Bleft%281-t%5E2right%29%5E%7Bmu+-frac%7B1%7D%7B2%7D%7D%7D%7Bleft%28z%2Btsqrt%7Bz%5E2-1%7Dright%29%5E%7Bmu-nu%7D%7Ddt&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /></p>
           
                <h3>On a separate line</h3>
                <p><img src="https://s0.wp.com/latex.php?latex=displaystyle+P_nu%5E%7B-mu%7D%28z%29%3Dfrac%7Bleft%28z%5E2-1right%29%5E%7Bfrac%7Bmu%7D%7B2%7D%7D%7D%7B2%5Emu+sqrt%7Bpi%7DGammaleft%28mu%2Bfrac%7B1%7D%7B2%7Dright%29%7Dint_%7B-1%7D%5E1frac%7Bleft%281-t%5E2right%29%5E%7Bmu+-frac%7B1%7D%7B2%7D%7D%7D%7Bleft%28z%2Btsqrt%7Bz%5E2-1%7Dright%29%5E%7Bmu-nu%7D%7Ddt&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /></p>
                <p><img src="https://s0.wp.com/latex.php?latex=P_nu%5E%7B-mu%7D%28z%29%3Dfrac%7Bleft%28z%5E2-1right%29%5E%7Bfrac%7Bmu%7D%7B2%7D%7D%7D%7B2%5Emu+sqrt%7Bpi%7DGammaleft%28mu%2Bfrac%7B1%7D%7B2%7Dright%29%7Dint_%7B-1%7D%5E1frac%7Bleft%281-t%5E2right%29%5E%7Bmu+-frac%7B1%7D%7B2%7D%7D%7D%7Bleft%28z%2Btsqrt%7Bz%5E2-1%7Dright%29%5E%7Bmu-nu%7D%7Ddt&bg=ffffff&fg=404040%3B&s=0&c=20201002" alt="" /></p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HtmlElements
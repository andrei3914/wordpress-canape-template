import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import './Readability.scss';

const Readability = () => {
  return (
    <div>
      <Navigation />
      <div className="readability-container">
        <header>
          <h1 className='entry-title'>Readability</h1>
        </header>
        <div className="content">
          <p>
          “I'm sure I'm not Ada,” she said, “for her hair goes in such 
          long ringlets, and mine doesn't go in ringlets at all; and 
          I'm sure I can't be Mabel, for I know all sorts of things, 
          and she, oh! she knows such a very little! Besides, SHE'S she,
           and I'm I, and—oh dear, how puzzling it all is! I'll try if I
            know all the things I used to know. Let me see: four times 
            five is twelve, and four times six is thirteen, and four 
            times seven is—oh dear! I shall never get to twenty at that
             rate! However, the Multiplication Table doesn't signify: 
             let's try Geography. London is the capital of Paris, and 
             Paris is the capital of Rome, and Rome—no, THAT'S all 
             wrong, I'm certain! I must have been changed for Mabel! 
             I'll try and say 'How doth the little—'” and she crossed 
             her hands on her lap as if she were saying lessons, and 
             began to repeat it, but her voice sounded hoarse and 
             strange, and the words did not come the same as they used 
             to do:
          </p>
          <blockquote>
            <p>“How doth the little crocodile<br />
                Improve his shining tail,<br />
                And pour the waters of the Nile<br />
                On every golden scale! <br />
            </p>
            <p>
            “How cheerfully he seems to grin,<br />
              How neatly spread his claws,<br />
              And welcome little fishes in<br />
              With gently smiling jaws!”<br />
            </p>
          </blockquote>
          <p>
          “I'm sure those are not the right words,” said poor Alice, 
          and her eyes filled with tears again as she went on, 
          “I must be Mabel after all, and I shall have to go and live 
          in that poky little house, and have next to no toys to play 
          with, and oh! ever so many lessons to learn! No, I've made 
          up my mind about it; if I'm Mabel, I'll stay down here! 
          It'll be no use their putting their heads down and saying 
          'Come up again, dear!' I shall only look up and say 'Who am 
          I then? Tell me that first, and then, if I like being that 
          person, I'll come up: if not, I'll stay down here till I'm 
          somebody else'—but, oh dear!” cried Alice, with a sudden 
          burst of tears, “I do wish they WOULD put their heads down! 
          I am so VERY tired of being all alone here!”
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Readability
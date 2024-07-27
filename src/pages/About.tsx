import { RefObject, useRef, useState } from 'react'

const Accordions = [
    {
        title:"Accordion 1",
        desc :`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nemo veniam quod neque labore quasi facilis minus, corporis,
              dolores sit ullam reiciendis, accusantium quos officiis magnam
              amet ducimus similique nam!`
    },
    {
        title:"Accordion 2",
        desc :`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nemo veniam quod neque labore quasi facilis minus, corporis,
              dolores sit ullam reiciendis, accusantium quos officiis magnam
              amet ducimus similique nam!`
    },
    {
        title:"Accordion 3",
        desc :`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nemo veniam quod neque labore quasi facilis minus, corporis,
              dolores sit ullam reiciendis, accusantium quos officiis magnam
              amet ducimus similique nam!`
    }
]



const About = () => {
    const [active , setActive] = useState<number>(-1)
    const textRef : RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null)

    const handleClick = (idx:number) =>{
        setActive( prev => prev == idx ? -1 : idx )
    }


    const renderAccordions = Accordions.map((acc,idx) =>(
        <div className="accordion accordion-1 w-[500px] mb-6 mx-auto rounded-lg bg-[#2e2e2e shadow-[0px_0px_7px_0px_#00000040]" key={idx}>
          <button
            className='bg-black w-full h-[40px] px-[20px] rounded-t-lg'
            onClick={() => handleClick(idx)}>{acc.title}</button>
          {
             <div className={`overflow-hidden transition-all duration-[0.5s]`}
             style={ idx == active ? {height: textRef?.current?.clientHeight } : {height:0} }
             >
             <p className='p-5' ref={textRef}>
                 {acc.desc}
             </p>
         </div>
          }
        </div>
    ) )

  return (
    <div>
      <h1 className='mb-12 text-center text-[30px]'>About Page</h1>
      <div className="accordions">
        {renderAccordions}
      </div>
    </div>
  );
}

export default About
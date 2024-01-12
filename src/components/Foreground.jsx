import React, { useRef, useState } from 'react'
import Cards from './cards';

function Foreground() {

  const ref = useRef(null);

  const data = [
    {desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    filesize: ".9Mbs",
    close: false, 
    tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"},
  },
  {desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  filesize: ".9Mbs",
  close: false, 
  tag: {isOpen:true, tagTitle: "Download Now", tagColor: "blue"},
},
{desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
filesize: ".9Mbs",
close: false, 
tag: {isOpen:true, tagTitle: "Upload", tagColor: "green"},
},
  ];
  
  return (
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index)=>(
        <Cards data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground;
import { useState } from "react"


export default function Accordion({children, open, id, title}: {children?: React.ReactNode, open: Boolean, id:string, title:string}) {
  const [isOpen, setOpen] = useState(open)
  return (
    <div  className="m-0 p-0 border bg-alt-50  w-full">
      <h3 className="m-0 p-0 text-md">
        <button id={`controlof-${id}`} type="button" aria-expanded={isOpen ? "true" : "false"} className="bg-transparent m-0 py-4 px-6 w-full text-left	" aria-controls={id} onClick={() => setOpen(!isOpen)}>
          <span className="accordion-title text-primary">
            {title}
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div id={id} aria-labelledby={`controlof-${id}`} className={`flex flex-col gap-x-8 gap-y-4 flex-wrap p-4 ${isOpen ? '' : 'hidden'}`}>
        {children}
      </div>
    </div>
      
  )
}
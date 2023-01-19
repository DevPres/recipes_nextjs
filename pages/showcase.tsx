import Accordion from "@/components/Accordion";
import Button from "@/components/Buttons/Button";

export default function ShowCase() {

  const handleClick = (data: any = null)  => {
    console.log(data)
  }
  return (
    <>
    <Accordion open={false} id="btns" title="Text">
    <h1>Heading H1</h1>
    <h2>Heading H2</h2>
    <h3>Heading H3</h3>
    <h4>Heading H4</h4>
    <h5>Heading H5</h5>
    <h6>Heading H6</h6>
    <hr />
    <p>Many Jimdo Creator templates have full-width content areas (like template Zurich in the example above), which make them ideal for showing large images or photo galleries. When it comes to landing page text, though, it’s best not to let your lines run across the entire width. Try using Columns elements and Photo elements to break up the text and create shorter lines.</p>
    <hr />
    <article>
      <hgroup>
        <h1>
          Article heading h1
        </h1>
        <p>
          - Article sub heading h6 thast is loong more than one line
        </p>
      </hgroup>
      <p>
      Notice how the lowest lightness in the dark text color set is 65% and the highlest lightness in the dark surfaces is 25%. That's 40% of lightness breathing room between them. In the light theme, there's 55% breathing room in the light theme. Keeping lightness differences between text and surface colors at around 40-50% can help keep color contrast ratios high, while also being a subtle lever to adjust in case scores are poor.
      </p>

    </article>

    
    </Accordion>
    <Accordion open={false} id="btns" title="Buttons">
      <>
      <div className="flex flex-col gap-x-8 gap-y-4 flex-wrap p-4">
          <Button onClick={(e) => handleClick(e)} text="primary xs" color="primary"  size='xs'></Button>
          <Button onClick={(e) => handleClick(e)} text="primary sm" color="primary"  size='sm'></Button>
          <Button text="primary md" color="primary"  size='md'></Button>
          <Button text="primary lg" color="primary"  size='lg'></Button>
          <Button text="primary xl" color="primary"  size='xl'></Button>
          <Button text="primary full" color="primary"  size='full'></Button>
        </div>
        
        <div className="flex flex-col gap-x-8 gap-y-4 flex-wrap p-4">
          <Button text="alt xs" color="alt"  size='xs'></Button>
          <Button text="alt sm" color="alt"  size='sm'></Button>
          <Button text="alt md" color="alt"  size='md'></Button>
          <Button text="alt lg" color="alt"  size='lg'></Button>
          <Button text="alt xl" color="alt"  size='xl'></Button>
          <Button text="alt full" color="alt"  size='full'></Button>
        </div>

        <div className="flex flex-col gap-x-8 gap-y-4 flex-wrap p-4">
          <Button text="outline xs" color="outline"  size='xs'></Button>
          <Button text="outline sm" color="outline"  size='sm'></Button>
          <Button text="outline md" color="outline"  size='md'></Button>
          <Button text="outline lg" color="outline"  size='lg'></Button>
          <Button text="outline xl" color="outline"  size='xl'></Button>
          <Button text="outline full" color="outline"  size='full'></Button>
        </div>
        <div className="flex flex-col gap-x-8 gap-y-4 flex-wrap p-4">
          <Button text="outline-alt xs" color="outline-alt"  size='xs'></Button>
          <Button text="outline-alt sm" color="outline-alt"  size='sm'></Button>
          <Button text="outline-alt md" color="outline-alt"  size='md'></Button>
          <Button text="outline-alt lg" color="outline-alt"  size='lg'></Button>
          <Button text="outline-alt xl" color="outline-alt"  size='xl'></Button>
          <Button text="outline-alt full" color="outline-alt"  size='full'></Button>
        </div>
      </>
        
       

    </Accordion>
    </>
  )
}
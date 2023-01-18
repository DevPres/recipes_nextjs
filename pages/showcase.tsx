import Accordion from "@/components/Accordion";
import Button from "@/components/Buttons/Button";

export default function ShowCase() {

  const handleClick = (data: any = null)  => {
    console.log(data)
  }
  return (
    <>

    <Accordion open={false} id="btns" title="Bottoni">
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
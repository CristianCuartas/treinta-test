import React, {useState} from 'react'
import { Button, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const PopoverItem = props => {
    const { id, item } = props;
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
  <span>
      <Button
          className="mr-1"
          color="light"
          id={"Popover-" + id}
          type="button"
          style={{
            width:'100px', 
            height:'100px'
          }}
          title={item.title}
        >
           <img width="100%" src={item.img} alt={`Icon ${item.title}`}/>
        </Button>
        <Popover
          placement={'top'}
          isOpen={popoverOpen}
          target={"Popover-" + id}
          toggle={toggle}
        >
          <PopoverHeader>{item.title}</PopoverHeader>
          <PopoverBody>
            {item.description}
          </PopoverBody>
        </Popover>
      </span>
      
    );
  };

  export default PopoverItem;
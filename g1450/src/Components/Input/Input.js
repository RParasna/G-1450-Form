import Form from "../Form/Form"; 
import './input.css';

export default function  Input()  {

  return (
    <div className="outside">
        <div className="inside">
            <div className="header">
              G-1450 Form
            </div>
            <Form input={true}/>
        </div>
    </div>
  );
}

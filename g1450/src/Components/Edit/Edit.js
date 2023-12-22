import Form from "../Form/Form"; 
import './Edit.css';
import { Location, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function  Edit()  {
  const location = useLocation();

  useEffect(() => {
    console.log(location)
}, []);

  return (
    <div className="outside">
        <div className="inside">
            <div className="header">
              Edit G-1450 Form Submission
            </div>
            <Form input={false} applicant={location.state.applicant} id={location.state.id}/>
        </div>
    </div>
  );
}

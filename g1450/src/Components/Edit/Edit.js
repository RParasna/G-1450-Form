import Form from "../Form/Form"; 
import './Edit.css';
import { Location, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function  Edit()  {
  const [submitted, setSubmitted] = useState(false)
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
            <Form input={false} applicant={location.state.applicant} setSubmitted={setSubmitted} id={location.state.id}/>
            {submitted &&<div className="success">
              "You have resubmitted succesfully"
            </div>}
        </div>
    </div>
  );
}

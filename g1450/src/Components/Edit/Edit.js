import Form from "../Form/Form"; 
import { Location, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function  Edit()  {
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation();

  useEffect(() => {
    console.log(location)
}, []);

  return (
    <div className="flex justify-center p-12 min-h-screen bg-indigo-300 ">
        <div className="w-full bg-white">
            <div className="flex justify-center content-center w-full font-bold mt-8 sm:text-3xl">
              Edit G-1450 Form Submission
            </div>
            <Form input={false} applicant={location.state.applicant} setSubmitted={setSubmitted} id={location.state.id}/>
            {submitted && <div className="flex justify-center content-center w-full font-bold mb-8 text-green-600 text-lg">
              "You have resubmitted succesfully"
            </div>}
        </div>
    </div>
  );
}

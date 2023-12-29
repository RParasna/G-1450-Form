import Form from "../Form/Form"; 

export default function  Input()  {

  return (
    <div className="flex justify-center p-12 min-h-screen bg-indigo-300 ">
        <div className="w-full bg-white">
            <div className="flex justify-center content-center w-full font-bold mt-8 sm:text-3xl">
              G-1450 Form
            </div>
            <Form input={true}/>
        </div>
    </div>
  );
}

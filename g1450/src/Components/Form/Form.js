import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Field from './Field';
import { useNavigate } from 'react-router-dom';
 
export default function  Form(props)  {
	const  [firstName, setFirstName] =  useState('');
    const  [middleName, setMiddleName] =  useState('');
    const  [lastName, setLastName] =  useState('');
    const  [cardFirstName, setCardFirstName] =  useState('');
    const  [cardMiddleName, setCardMiddleName] =  useState('');
    const  [cardLastName, setCardLastName] =  useState('');
    const  [streetName, setStreetName] =  useState('');
    const  [buildingType, setBuildingType] = useState(-1)
    const  [buildingNum, setBuildingNum] =  useState('');
    const  [city, setCity] =  useState('');
    const  [state, setState] = useState("")
    const  [zipCode, setZipCode] =  useState('');
    const  [signature, setSignature] =  useState('');
    const  [telephoneNumber, setTelephoneNumber] =  useState('');
    const  [email, setEmail] =  useState('');
    const  [cardNumber, setCardNumber] =  useState('');
    const  [expiryDate, setExpiryDate] =  useState('');
    const  [cardType, setCardType] =  useState(-1);
    const  [payment, setPayment] =  useState('');
    const  [firstNameValid, setFirstNameValid] =  useState(true);
    const  [middleNameValid, setMiddleNameValid] =  useState(true);
    const  [lastNameValid, setLastNameValid] =  useState(true);
    const  [cardFirstNameValid, setCardFirstNameValid] =  useState(true);
    const  [cardMiddleNameValid, setCardMiddleNameValid] =  useState(true);
    const  [cardLastNameValid, setCardLastNameValid] =  useState(true);
    const  [streetNameValid, setStreetNameValid] =  useState(true);
    const  [buildingNumValid, setBuildingNumValid] =  useState(true);
    const  [cityValid, setCityValid] =  useState(true);
    const  [zipCodeValid, setZipCodeValid] =  useState(true);
    const  [signatureValid, setSignatureValid] =  useState(true);
    const  [telephoneNumberValid, setTelephoneNumberValid] =  useState(true);
    const  [emailValid, setEmailValid] =  useState(true);
    const  [cardNumberValid, setCardNumberValid] =  useState(true);
    const  [expiryValid, setExpiryValid] =  useState(true);
    const  [paymentValid, setPaymentValid] =  useState(true);
    const  [hasEdited, setHasEdited] =  useState(false);
    const  [buttonDisabled, setButtonDisabled] =  useState(true);
    const  [submitError, setSubmitError] = useState(false);

    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const navigate = useNavigate();
    const letters = new RegExp("(^[A-zÀ-ú]+$)");

    //following needs error checking and some more work
    const streetReg = new RegExp("(^[A-zÀ-ú0-9._# -]+$)"); 
    const numbersReg = new RegExp("(^[0-9]+$)");
    const zipReg = new RegExp("(^[A-z0-9]{6}$|^[A-z0-9]{3} [A-z0-9]{3}$)");
    const emailReg = new RegExp(/^[A-z0-9. _%+-]+@[A-z0-9. -]+\.[A-z]{2,}$/)
    const expiryReg = new RegExp("(^[0-9][1-9]/2[0-9]{3}$)");
    const paymentReg = new RegExp("(^[0-9]+$|^[0-9]+.[0-9]+$)");

    
    useEffect(() => {
        if (!props.input && props.applicant) {
            setFirstName(props.applicant.firstName)
            setMiddleName(props.applicant.middleName)
            setLastName(props.applicant.lastName)
            setCardFirstName(props.applicant.cardFirstName)
            setCardMiddleName(props.applicant.cardMiddleName)
            setCardLastName(props.applicant.cardLastName)
            setStreetName(props.applicant.streetName)
            setBuildingType(props.applicant.buildingType)
            setBuildingNum(props.applicant.buildingNum)
            setCity(props.applicant.city)
            setState(props.applicant.state)
            setZipCode(props.applicant.zipCode)
            setSignature(props.applicant.signature)
            setTelephoneNumber(props.applicant.telephoneNumber)
            setEmail(props.applicant.email)
            setCardNumber(props.applicant.cardNumber)
            setExpiryDate(props.applicant.expiryDate)
            setPayment(props.applicant.payment)
            setBuildingType(props.applicant.buildingType === "Apt" ? 0: props.applicant.buildingType === "Ste" ? 1 : 2)
            setCardType(props.applicant.cardType === "Visa" ? 0 : props.applicant.cardType ===  "MasterCard" ? 1 :  props.applicant.cardType === "American Express" ? 2 : 3)
        }
    }, [props]);


    //disable or enable submit button
    useEffect(() => {
        if (hasEdited && firstNameValid && middleNameValid && lastNameValid && cardFirstNameValid && cardMiddleNameValid && cardLastNameValid &&
            streetNameValid && buildingType != -1 && buildingNumValid && cityValid && state && zipCodeValid && signatureValid &&
            telephoneNumberValid && emailValid && cardNumberValid && expiryValid && cardType != -1 && paymentValid) {
                setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [hasEdited, firstNameValid, middleNameValid, lastNameValid, cardFirstNameValid, cardMiddleNameValid, cardLastNameValid, streetNameValid, buildingType, buildingNumValid, cityValid, state, zipCodeValid, signatureValid, telephoneNumberValid, emailValid, cardNumberValid, expiryValid, cardType, paymentValid]);



    const handleChange = (e, setValue, setValid, regex) => {
        setValue(e.target.value); 
        setValid(regex.test(e.target.value));
        if(!hasEdited) {
            setHasEdited(true);
        }
    }

    const handleCheckChange = (e) => {
        if (e.target.value === "Apt") {
            if (buildingType === 0) {
                setBuildingType(-1);
            } else {
                setBuildingType(0);
            }
        } else if (e.target.value === "Ste") {
            if (buildingType === 1) {
                setBuildingType(-1);
            } else {
                setBuildingType(1);
            }
        } else {
            if (buildingType === 2) {
                setBuildingType(-1);
            } else {
                setBuildingType(2);
            }
        }
    }

    const handleCardTypeChange = (e) => {
        if (e.target.value === "Visa") {
            if (cardType === 0) {
                setCardType(-1);
            } else {
                setCardType(0);
            }
        } else if (e.target.value === "MasterCard") {
            if (cardType === 1) {
                setCardType(-1);
            } else {
                setCardType(1);
            }
        } else if (e.target.value === "American Express") {
            if (cardType === 2) {
                setCardType(-1);
            } else {
                setCardType(2);
            }
        } else {
            if (cardType === 3) {
                setCardType(-1);
            } else {
                setCardType(3);
            }
        }
    }

    const handleClick = async (e) => {
        const applicant = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            cardFirstName: cardFirstName,
            cardMiddleName: cardMiddleName,
            cardLastName: cardLastName,
            streetName: streetName,
            buildingType: buildingType === 0 ? "Apt" : buildingType === 1 ? "Ste" : "Flr",
            buildingNum: buildingNum,
            city: city,
            state: state,
            zipCode: zipCode,
            signature: signature,
            telephoneNumber: telephoneNumber,
            email: email,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardType: cardType === 0 ? "Visa" : cardType === 1 ? "MasterCard" :  cardType === 2 ? "American Express" : "Discover",
            payment: payment
        };
        console.log(applicant)
        navigate('/edit',{ state: {applicant: applicant}})
        
        

        // if (props.input) {
        //     await fetch("http://34.207.196.168:8080/applicant", {
        //         method:"POST",
        //         headers:{"Content-Type":"application/json"},
        //         body: JSON.stringify(applicant)
        //     }).then(response => response.json())
        //     .then(data => {
        //         console.log("applicant added")
        //         console.log(data)
        //         navigate('/edit',{ state: {applicant: applicant, id: data.id}})
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setSubmitError(true);
        //     })
        // } else {
        //     applicant.id = props.id;
        //     await fetch("http://34.207.196.168:8080/applicant", {
        //         method:"PUT",
        //         headers:{"Content-Type":"application/json"},
        //         body: JSON.stringify(applicant)
        //     }).then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         props.setSubmitted(true)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setSubmitError(true);
        //     })
        // }
    }

return  (
    <div className='p-8 pb-0'>
        <div className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl"> 
            Applicant's/ Petitioner's/ Requester's Information (Full Legal Name)
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-6 sm:grid-cols-3 my-10">
            <Field label="Given Name (First Name)" value={firstName} error={!firstNameValid} helperText={'Please enter a valid name!'} onChange={(e) => { handleChange(e, setFirstName, setFirstNameValid, letters) }}/>
            <Field label="Middle Name (if any)" value={middleName} error={!middleNameValid} helperText={!middleNameValid ? 'Please enter a valid name!' : ' '} onChange={(e) => { handleChange(e, setMiddleName, setMiddleNameValid, letters) }}/>
            <Field label="Family Name (Last Name)" value={lastName} error={!lastNameValid} helperText={!lastNameValid ? 'Please enter a valid name!' : ' '} onChange={(e) => { handleChange(e, setLastName, setLastNameValid, letters) }}/>
        </div>
        <hr className='mb-10'/>
        <div className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl"> 
           Credit Card Billing Information (Credit Card Holder's Name as it Appears on the Card)
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3 my-10">
            <Field label="Given Name (First Name)" value={cardFirstName} error={!cardFirstNameValid} helperText={!cardFirstNameValid ? 'Please enter a valid name!' : ' '} onChange={(e) => { handleChange(e, setCardFirstName, setCardFirstNameValid, letters) }}/>
            <Field label="Middle Name (if any)" value={cardMiddleName} error={!cardMiddleNameValid} helperText={!cardMiddleNameValid ? 'Please enter a valid name!' : ' '} onChange={(e) => { handleChange(e, setCardMiddleName, setCardMiddleNameValid, letters) }}/>
            <Field label="Family Name (Last Name)" value={cardLastName} error={!cardLastNameValid} helperText={!cardLastNameValid ? 'Please enter a valid name!' : ' '} onChange={(e) => { handleChange(e, setCardLastName, setCardLastNameValid, letters) }}/>
        </div>
        <div className="text-lg tracking-tight text-gray-900 sm:text-lg"> 
            Credit Card Holder's Billing Address:
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-6  my-10">
            <Field label="Street Number and Name" value={streetName} error={!streetNameValid} helperText={!streetNameValid ? 'Please enter a valid Street name!' : ' '} onChange={(e) => { handleChange(e, setStreetName, setStreetNameValid, streetReg) }}/>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3 my-10">
            <div className="grid grid-cols-3 gap-x-8 sm:grid-cols-3 my-2">
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                    Apt
                    </label>
                    <div className='flex justify-center mt-3'>
                        <input
                        id="Apt"
                        aria-describedby="comments-description"
                        name="Apt"
                        type="checkbox"
                        value="Apt"
                        checked={buildingType === 0}
                        onChange={(e) => { handleCheckChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                        Ste
                    </label>
                    <div className='flex justify-center mt-3'>
                        <input
                        id="Ste"
                        aria-describedby="comments-description"
                        name="Ste"
                        value="Ste"
                        type="checkbox"
                        checked={buildingType === 1}
                        onChange={(e) => { handleCheckChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                        Flr
                    </label>
                    <div className='flex justify-center mt-3'>
                        <input
                        id="Flr"
                        aria-describedby="comments-description"
                        name="Flr"
                        type="checkbox"
                        value="Flr"
                        checked={buildingType === 2}
                        onChange={(e) => { handleCheckChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
            </div>
            <div className='col-span-2'>
            <Field  label="Number" value={buildingNum} error={!buildingNumValid} helperText={!buildingNumValid ? 'Please enter a valid number!' : ' '} onChange={(e) => { handleChange(e, setBuildingNum, setBuildingNumValid, numbersReg) }}/>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3 my-10">
            <Field label="City or Town" value={city} error={!cityValid} helperText={!cityValid ? 'Please enter a valid City/Town!' : ' '} onChange={(e) => { handleChange(e, setCity, setCityValid, letters) }}/>
            <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                    State
                </label>
                <select
                    id="location"
                    name="location"
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue="AL"
                    onChange={(e) => { setState(e.target.value); }}
                >
                    {states.map(function(currentState, i){
                        return  <option key={i} value={currentState}>{currentState}</option>;
                    })}
                </select>
            </div>
            <Field label="ZIP Code" value={zipCode} error={!zipCodeValid} helperText={!zipCodeValid ? 'Please enter a valid Zip Code!' : ' '} onChange={(e) => { handleChange(e, setZipCode, setZipCodeValid, zipReg) }}/>
        </div>
        <div className="text-lg tracking-tight text-gray-900 sm:text-lg"> 
            Credit Card Holder's Signature and Contact Information:
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3 my-10">
            <Field label="Credit Card Holder's Signature" value={signature} error={!signatureValid} helperText={!signatureValid ? 'Please enter a valid signature!' : ' '} onChange={(e) => { handleChange(e, setSignature, setSignatureValid, letters) }}/>
            <Field label="Credit Card Holder's Daytime Telephone Number"  value={telephoneNumber} error={!telephoneNumberValid} helperText={!telephoneNumberValid ? 'Please enter a telephone number!' : ' '} onChange={(e) => { handleChange(e, setTelephoneNumber, setTelephoneNumberValid, numbersReg) }}/>
            <Field label="Credit Card Holder's Email Address" value={email} error={!emailValid} helperText={!emailValid ? 'Please enter a valid Email!' : ' '} onChange={(e) => { handleChange(e, setEmail, setEmailValid, emailReg)}}/>
        </div>
        <hr />
        <div className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl"> 
            Credit Card Information
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-2 my-10">
            <Field label="Credit Card Number" variant="outlined" value={cardNumber} error={!cardNumberValid} helperText={!cardNumberValid ? 'Please enter a valid Card number!' : ' '} onChange={(e) => { handleChange(e, setCardNumber, setCardNumberValid, numbersReg) }}/>
            <Field label="Credit Card Expiration Date (mm/yyyy)" value={expiryDate} error={!expiryValid} helperText={!expiryValid ? 'Please enter a valid Expiry Date (year should be at least 2000)!' : ' '} onChange={(e) => {handleChange(e, setExpiryDate, setExpiryValid, expiryReg) }}/>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 my-10">
            <div className="grid grid-cols-4 gap-x-8 sm:grid-cols-4 my-2">
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                        Visa
                    </label>
                    <div className='flex justify-center mt-3'>
                        <input
                        id="Visa"
                        aria-describedby="comments-description"
                        name="Visa"
                        type="checkbox"
                        value="Visa"
                        checked={cardType === 0}
                        onChange={(e) => { handleCardTypeChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                        MasterCard
                    </label>
                    <div className='flex justify-center mt-3'>
                        <input
                        id="MasterCard"
                        aria-describedby="comments-description"
                        name="MasterCard"
                        type="checkbox"
                        value="MasterCard"
                        checked={cardType === 1}
                        onChange={(e) => { handleCardTypeChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                        American Express
                    </label>
                    <div className='flex justify-center mt-3'>
                    <input
                        id="American Express"
                        aria-describedby="comments-description"
                        name="American Express"
                        type="checkbox"
                        value="American Express"
                        checked={cardType === 2}
                        onChange={(e) => { handleCardTypeChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="comments" className="font-medium text-gray-900 flex justify-center">
                        Discover
                    </label>
                    <div className='flex justify-center mt-3'>
                        <input
                        id="Discover"
                        aria-describedby="comments-description"
                        name="Discover"
                        type="checkbox"
                        value="Discover"
                        checked={cardType === 3}
                        onChange={(e) => { handleCardTypeChange(e)}}
                        className="flex justify-center h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                </div>
            </div>
            <Field label="Authorized Payment Amount (in $)" value={payment} error={!paymentValid} helperText={!paymentValid ? 'Please enter a valid payment amount!' : ' '} onChange={(e) => { handleChange(e, setPayment, setPaymentValid, paymentReg) }}/>
        </div>
        <div className="flex justify-center content-center">
            <div className="w-6/12 font-bold mb-8 sm:text-lg">
                <Button fullWidth  disabled={buttonDisabled} onClick={(e) => {handleClick(e); }} variant="contained">{props.input ? "Submit" : "Resubmit"}</Button>
            </div>
        </div>
         {submitError && <div className="flex justify-center content-center w-full font-bold mb-8 text-red-600 text-lg">
              "Somthing Went Wrong"
        </div>}
    </div>
    
)};
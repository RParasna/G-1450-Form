import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Form.css';
 
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

    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const navigate = useNavigate();

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

        

        if (props.input) {
            await fetch("http://localhost:8080/applicant", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(applicant)
            }).then(response => response.json())
            .then(data => {
                console.log("applicant added")
                console.log(data)
                navigate('/edit',{ state: {applicant: applicant, id: data.id}})
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            applicant.id = props.id;
            await fetch("http://localhost:8080/applicant", {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(applicant)
            }).then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

return  (
    <div className='all'>
        <div className="section"> 
            Applicant's/Petitioner's/Requester's Information (Full Legal Name)
        </div>
        <div className="inputs">
            <TextField fullWidth id="outlined-basic" label="Given Name (First Name)" variant="outlined" value={firstName} onChange={(e) => { setFirstName(e.target.value); }}/>
            <TextField fullWidth id="outlined-basic" label="Middle Name (if any)" variant="outlined" value={middleName} onChange={(e) => { setMiddleName(e.target.value); }}/>
            <TextField fullWidth id="outlined-basic" label="Family Name (Last Name)" variant="outlined" value={lastName} onChange={(e) => { setLastName(e.target.value); }}/>
        </div>
        <hr />
        <div className="section"> 
           Credit Card Billing Information (Credit Card Holder's Name as it Appears on the Card)
        </div>
        <div className="inputs">
            <TextField fullWidth id="outlined-basic" label="Given Name (First Name)" variant="outlined" value={cardFirstName} onChange={(e) => { setCardFirstName(e.target.value); }}/>
            <TextField fullWidth id="outlined-basic" label="Middle Name (if any)" variant="outlined" value={cardMiddleName} onChange={(e) => { setCardMiddleName(e.target.value); }}/>
            <TextField fullWidth id="outlined-basic" label="Family Name (Last Name)" variant="outlined" value={cardLastName} onChange={(e) => { setCardLastName(e.target.value); }}/>
        </div>
        <div className="subSection"> 
            Credit Card Holder's Billing Address:
        </div>
        <div className="inputs">
            <TextField fullWidth id="outlined-basic" label="Street Number and Name" variant="outlined" value={streetName} onChange={(e) => { setStreetName(e.target.value); }}/>
        </div>
        <div className="inputs">
            <div className='checks'>
                <FormControlLabel
                    value="Apt"
                    control={<Checkbox checked={buildingType === 0} onChange={(e) => { handleCheckChange(e)}}/>}
                    label="Apt"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="Ste"
                    control={<Checkbox checked={buildingType === 1} onChange={(e) => { handleCheckChange(e)}}/>}
                    label="Ste"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="Flr"
                    control={<Checkbox checked={buildingType === 2} onChange={(e) => { handleCheckChange(e)}}/>}
                    label="Flr"
                    labelPlacement="top"
                />
            </div>
            <TextField fullWidth id="outlined-basic" type='number' label="Number" variant="outlined" value={buildingNum} onChange={(e) => { setBuildingNum(e.target.value); }}/>
        </div>
        <div className="inputs">
            <TextField fullWidth id="outlined-basic" label="City or Town" variant="outlined" value={city} onChange={(e) => { setCity(e.target.value); }}/>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Age"
                onChange={(e) => { setState(e.target.value); }}
                >
                    {states.map(function(currentState, i){
                        return  <MenuItem key={i} value={currentState}>{currentState}</MenuItem>;
                    })}
                </Select>
            </FormControl>
            <TextField fullWidth id="outlined-basic" label="ZIP Code" variant="outlined" value={zipCode} onChange={(e) => { setZipCode(e.target.value); }}/>
        </div>
        <div className="subSection"> 
            Credit Card Holder's Signature and Contact Information:
        </div>
        <div className="inputs">
            <TextField fullWidth id="outlined-basic" label="Credit Card Holder's Signature" variant="outlined" value={signature} onChange={(e) => { setSignature(e.target.value); }}/>
            <TextField type='number' fullWidth id="outlined-basic" label="Credit Card Holder's Daytime Telephone Number" variant="outlined" value={telephoneNumber} onChange={(e) => { setTelephoneNumber(e.target.value); }}/>
            <TextField fullWidth id="outlined-basic" label="Credit Card Holder's Email Address" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value); }}/>
        </div>
        <hr />
        <div className="section"> 
            Credit Card Information
        </div>
        <div className="inputs">
            <TextField type='number' fullWidth id="outlined-basic" label="Credit Card Number" variant="outlined" value={cardNumber} onChange={(e) => { setCardNumber(e.target.value); }}/>
            <TextField fullWidth id="outlined-basic" label="Credit Card Expiration Date (mm/yyyy)" variant="outlined" value={expiryDate} onChange={(e) => { setExpiryDate(e.target.value); }}/>
        </div>
        <div className="inputs">
            <div className='cardTypeChecks'>
                <FormControlLabel
                    value="Visa"
                    control={<Checkbox checked={cardType === 0} onChange={(e) => { handleCardTypeChange(e)}}/>}
                    label="Visa"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="MasterCard"
                    control={<Checkbox checked={cardType === 1} onChange={(e) => { handleCardTypeChange(e)}}/>}
                    label="MasterCard"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="American Express"
                    control={<Checkbox checked={cardType === 2} onChange={(e) => { handleCardTypeChange(e)}}/>}
                    label="American Express"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="Discover"
                    control={<Checkbox checked={cardType === 3} onChange={(e) => { handleCardTypeChange(e)}}/>}
                    label="Discover"
                    labelPlacement="top"
                />
            </div>
            <TextField type='number' fullWidth id="outlined-basic" label="Authorized Payment Amount (in $)" variant="outlined" value={payment} onChange={(e) => { setPayment(e.target.value); }}/>
        </div>
        <div className="container">
            <div className="submit">
                <Button fullWidth   onClick={(e) => {handleClick(e); }} variant="contained">{props.input ? "Submit" : "Resubmit"}</Button>
            </div>
        </div>
            
    </div>
    
)};
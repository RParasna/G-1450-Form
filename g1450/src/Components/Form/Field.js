import TextField from '@mui/material/TextField';

export default function Field(props)  {
    return  (
        <div>
            <label className="block text-base font-semibold leading-6 text-gray-900">
              {props.label}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {props.error && <div className='text-red-600 mt-5'>{props.helperText}</div>}
          </div>
        // <TextField fullWidth id="outlined-basic" label={props.label} variant="outlined" value={props.value} error={props.error} helperText={props.error ? props.helperText : ' '} onChange={(e) => { props.onChange(e)}}/>
    )
}
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function SearchBox(props) {
    const [txtValue, setTxtValue] = useState("");

    const onSearch = () => {
        props.onSearch(txtValue)
        setTxtValue("");
    }

    const handleOnChange = (e) => {
        setTxtValue(e.target.value);
    }

    return(
        <div>
                  <TextField value={txtValue} onChange={handleOnChange} label="søge på tags" variant="outlined" />
                   <Button onClick={onSearch}>Søge</Button>
        </div>
    )
}
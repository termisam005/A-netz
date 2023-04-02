import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/_test.scss';


function SelectTest() {
    const data = [
        {
            value: 1,
            label: "cerulean"
        },
        {
            value: 2,
            label: "fuchsia rose",
            isdisabled: false
        },
        {
            value: 3,
            label: "true red"
        },
        {
            value: 4,
            label: "aqua sky",
            isdisabled: false
        },
        {
            value: 5,
            label: "tigerlily"
        },
        {
            value: 6,
            label: "blue turquoise"
        }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    return (
        <div>
            <div className='p-30'>
                <div className='w-50'>

                    <Select
                        placeholder="Select Option"
                        value={selectedOption}
                        options={data}
                        onChange={handleChange}
                        isOptionDisabled={(option) => option.isdisabled}
                    />

                    {/* {selectedOption && 
                        <div style={{ marginTop: 20, lineHeight: '25px' }}>
                            <b>Selected Option</b><br />
                            <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
                            <div><b>Value: </b> {selectedOption.value}</div>
                        </div>} */}

                </div>
            </div>
        </div>
    );
}

export default SelectTest;

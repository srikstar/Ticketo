import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function PartnerEdit({ setControl, onSubmit }) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleEvent = (e) => e.stopPropagation();
    const { user } = useSelector(state => state.user)
    const owner = user?._id

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !address || !email || !phone) {
            alert("Please fill all fields!");
            return;
        }

        const theaterData = { name, address, email, phone, owner};
        if (onSubmit) onSubmit(theaterData);
        
        setControl(false);
    };

    return (
        <div className='partner-main-container row' onClick={() => setControl(false)}>
            <div className='partner-add-container column' onClick={handleEvent}>
                <h1>Add Theater</h1>

                <form onSubmit={handleSubmit} className="column">

                    <div className="form-row">
                        <label>Theater Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Address</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Phone</label>
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>

                    <button type="submit" className="submit-btn">
                        Add Theater
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PartnerEdit;

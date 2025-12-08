import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTheShow } from '../../../Interface/shows.api';
import './Booking.css';

function Booking() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        if (!id) return;
        const getShow = async () => {
            const response = await getTheShow(id);
            setShow(response);
        };
        getShow();
    }, [id]);

    const seatCount = parseInt(show?.totalSeats - show?.bookedSeats || 0);
    const seats = [...Array(seatCount).keys()];

    const handleBookedSeats = (seatId) => {
        setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(id => id !== seatId) : [...prev, seatId]);
    };


    return (
        <>
            <section className='div row'>
                <div className='show-details-container'>
                    <div className='show-container'>
                        {show && (
                            <>
                                <h1>{show?.name}</h1>
                                <h3>{show?.movie?.title}</h3>
                                <h3>{show?.time}</h3>
                                <h3>{show.date.slice(0, 10)}</h3>
                            </>
                        )}
                    </div>
                    <div className='seats-select-container row'>
                        <svg>
                            {show && seats.map((i) => {
                                const row = Math.floor(i / 20);
                                const col = i % 20;
                                const seatID = i + 1;

                                const isSelected = selectedSeats.includes(seatID);
                                const isBooked = show.bookedSeats.includes(seatID);

                                return (
                                    <rect
                                        key={seatID}
                                        x={col * 30 + 20}
                                        y={row * 30 + 20}
                                        width="24"
                                        height="24"
                                        className={`seat ${isBooked ? "sold" : isSelected ? "selected" : "available"}`}
                                        onClick={() => !isBooked && handleBookedSeats(seatID)}
                                    />
                                );
                            })}
                        </svg>
                    </div>


                    <div className='seats-price-details'>
                        <h2>Selected Seats : {selectedSeats.join(', ')}</h2>
                        <h2>Ticket Qty : {selectedSeats.length}</h2>
                        <h2>Cost of Ticket : {selectedSeats.length !== 0 && show?.tickePrice * selectedSeats.length}</h2>
                    </div>
                    
                    <button className="pay"><h1>Pay {selectedSeats.length !== 0 && show?.tickePrice * selectedSeats.length}</h1></button>
                </div>
            </section>
        </>
    );
}

export default Booking;

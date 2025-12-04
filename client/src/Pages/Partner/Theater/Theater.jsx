import React, { useEffect, useState } from 'react'
import '../Partner.css'
import PartnerEdit from '../AddEdit/PartnerEdit'
import { add_theater, get_theater_by_owner } from '../../../Interface/theaters.api'
import { getTheaterByOwner } from '../../../Store/theaters.store'
import { useDispatch, useSelector } from 'react-redux';

function Theater() {

    const [control, setControl] = useState(false);
    const { user } = useSelector(state => state.user)
    const { owner } = useSelector(state => state.owner)
    const dispatch = useDispatch()

    useEffect(() => {
        const getTheaters = async () => {
            try {
                const response = await get_theater_by_owner(user?._id)
                dispatch(getTheaterByOwner(response?.theater))
            } catch (error) {
                console.log(error)
            }
        }
        getTheaters()
    }, [dispatch, user])

    const handleAdd = () => {
        setControl(true);
    };

    const handleAddTheaterSubmit = async (data) => {
        try {
            const response = await add_theater(data);
            console.log("Theater Added Successfully:", response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {control && (
                <PartnerEdit setControl={setControl} onSubmit={handleAddTheaterSubmit} />
            )}

            <section className="div row">
                <div className='filter-movie-container row-fs'>
                    <button onClick={handleAdd}>+ Add Theater</button>
                </div>
            </section>


            <section className="div row">
                <div className="theater-display-main">
                    <table className='div'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Owner</th>
                                <th>isActive</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {owner && owner.map((data) => (
                                <tr key={data?._id}>
                                    <td>{data?.name}</td>
                                    <td>{data?.address}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.phone}</td>
                                    <td>{data?.owner}</td>
                                    <td>{data?.isActive ? 'Pending' : 'Approved'}</td>
                                    <td><button>Edit</button><button>Delete</button>{!data?.isActive ? (<button>Shows</button>) : ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}

export default Theater;

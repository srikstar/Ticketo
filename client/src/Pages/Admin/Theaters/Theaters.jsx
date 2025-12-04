import React, { useEffect} from 'react'
import '../Admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { getTheaterByOwner } from '../../../Store/theaters.store'
import { get_theater, theater_approve_api, theater_block_api } from '../../../Interface/theaters.api'

function Theaters() {

  const dispatch = useDispatch()
  const { owner } = useSelector(state => state.owner)

  useEffect(() => {
    const getTheaters = async () => {
      try {
        const response = await get_theater()
        dispatch(getTheaterByOwner(response?.theaters))
      } catch (error) {
        console.log(error)
      }
    }
    getTheaters()
  }, [dispatch])

  const handleApprove = async (id, action) => {
    try {
      const response = action === 'approve'
        ? await theater_approve_api(id)
        : await theater_block_api(id)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <section className="row div">
        <div className='admin-theater-approve'>
          <table className='div'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Owner</th>
                <th>Status</th>
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
                  <td>{data?.isActive ? 'Approved' : 'Pending'}</td>
                  <td>
                    {data?.isActive ? (
                      <button onClick={() => handleApprove(data._id, 'block')}>
                        Block
                      </button>
                    ) : (
                      <button onClick={() => handleApprove(data._id, 'approve')}>
                        Approve
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Theaters

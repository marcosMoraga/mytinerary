import React, { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'
import axios from 'axios'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useMediaQuery } from '@material-ui/core';

const CommentForm = (props) => {
    const text = useRef()
    const textUpdate = useRef()
    const [comments, setComments] = useState([])
    const [edit, setEdit] = useState({ commentId: '', flag: false })
    const phone = useMediaQuery('(max-width:768px)');

    useEffect(() => {
        async function handlerComments(idItinerary) {
            const res = await axios.get(`https://mytinerary-moraga.herokuapp.com/api/comments/itinerary/${idItinerary}`)
            setComments(res.data.comments)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        handlerComments(props.itineraryID)
    }, [props.itineraryID])


    const handlerSubmit = async (e) => {
        e.preventDefault()
        const res = await props.rdxAddComments(props.itineraryID, { text: text.current.value })
        if (res.succes) {
            setComments(res.comments)
        } else {
            toast.warning(res.error)
        }
    }

    return (
        <div style={{ overflow: 'auto', height: `${phone ? '90%' : '100%'}` }}>
            <h2>Leave a comment</h2>
            <form onSubmit={handlerSubmit}>
                <textarea style={{ resize: 'none' }} type='text' cols="30" rows='3' placeholder="create a comment" ref={text} />
                <input style={{ cursor: 'pointer', marginLeft: '0.5rem auto !important' }} type="submit" />
            </form>
            <div style={{ height: `${!phone ? '15px' : '10px'}` }}>
                {comments.length > 0 && comments.map(comment =>
                    <div key={comment._id} >
                        <div style={{ display: 'flex', overflow: 'auto' }}>
                            {!edit.flag &&
                                <>
                                    <img alt="user-img" style={{ height: `${!phone ? '60px' : '30px'}`, borderRadius: '50%' }} src={comment.img}>
                                    </img>
                                    <h2 style={{ marginRight: '1rem' }}>{comment.text}</h2>
                                </>
                            }
                            {edit.flag &&
                                (comment.user !== props.rdxUserLoggedId || edit.commentId !== comment._id) &&
                                <h2 style={{ marginRight: '1rem' }}>{comment.text}</h2>
                            }
                            {edit.flag && (edit.commentId === comment._id) &&
                                <>
                                    <input ref={textUpdate} type='text' defaultValue={comment.text} style={{ marginRight: '1rem', height: '3.5rem !important' }}></input>
                                    <button style={{ cursor: 'pointer' }} onClick={async () => {
                                        const updateComments = await props.rdxUpdate(props.itineraryID, comment._id, textUpdate.current.value)
                                        setComments(updateComments.comments)
                                        setEdit({ flag: false })
                                    }}>update</button>
                                    <button style={{ cursor: 'pointer' }} onClick={() => setEdit({ flag: false })}>cancel</button>
                                </>
                            }

                            {(localStorage.getItem('token') && comment.user === props.rdxUserLoggedId) &&
                                <button style={{ cursor: 'pointer' }} onClick={async () => {
                                    Swal.fire({
                                        title: 'Do you want to delete this comment?',
                                        showDenyButton: true,
                                        confirmButtonText: 'Delete',
                                        denyButtonText: `Cancel`,
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire('Deleted!', '', 'success')
                                            props.rdxDelete(props.itineraryID, comment._id).then(data => { setComments(data.comments) })
                                        } else if (result.isDenied) {
                                            Swal.fire('Message not deleted', '', 'info')
                                        }
                                    })

                                }}><i class="fas fa-times"></i></button>
                            }
                            {(localStorage.getItem('token') && comment.user === props.rdxUserLoggedId) &&
                                <button style={{ cursor: 'pointer', marginLeft: '1rem' }} onClick={() => {
                                    setEdit({ commentId: comment._id, flag: true })
                                }}><i class="far fa-edit"></i></button>
                            }
                        </div>
                    </div>)}
                {comments.length <= 0 && <h2>No comments yet</h2>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    rdxUserLoggedId: state.userReducers.userID
})

const mapDispatchToProps = {
    rdxAddComments: itinerariesActions.addComment,
    rdxDelete: itinerariesActions.deleteComment,
    rdxUpdate: itinerariesActions.updateComment
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)

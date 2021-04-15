import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { addCommunity } from '../network/community';
import useLocalStorage from 'react-use-localstorage';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const CreateCommunityModal = ({ show, setShow }) => {
    const [token] = useLocalStorage('token', '');
    const [community, setCommunity] = useState({
        title: '',
        location: '',
        description: '',
        image: '',
    });

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const response = await addCommunity(community, token);
            response && setShow(false);
        } catch (e) {
            console.log('Error creating community', e);
        }
    };

    return (
        <div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                style={{ marginTop: '5%' }}
            >
                <h2 className="modal-title">Add Community</h2>

                <div className="modal-body">
                    <form className="modal-form" onSubmit={handleCreate}>
                        <TextField
                            required
                            value={community.title}
                            variant="outlined"
                            label="Title"
                            placeholder="Title"
                            id="Title"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationCityIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) =>
                                setCommunity({
                                    ...community,
                                    title: e.target.value,
                                })
                            }
                        />
                        <TextField
                            required
                            value={community.location}
                            variant="outlined"
                            label="location"
                            placeholder="location"
                            id="location"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationCityIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) =>
                                setCommunity({
                                    ...community,
                                    location: e.target.value,
                                })
                            }
                        />
                        <TextField
                            variant="outlined"
                            label="Image URL"
                            placeholder="Image URL"
                            id="Image URL"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhotoCameraIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) =>
                                setCommunity({
                                    ...community,
                                    image: e.target.value,
                                })
                            }
                        />
                        <TextField
                            required
                            value={community.description}
                            variant="outlined"
                            label="Description"
                            multiline={true}
                            id="email"
                            className="modal-form-input"
                            rows={5}
                            onChange={(e) =>
                                setCommunity({
                                    ...community,
                                    description: e.target.value,
                                })
                            }
                        />
                        <Modal.Footer>
                            <button
                                className="modal-btn"
                                onClick={() => setShow(false)}
                            >
                                Close
                            </button>
                            <button className="modal-btn">Submit</button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CreateCommunityModal;

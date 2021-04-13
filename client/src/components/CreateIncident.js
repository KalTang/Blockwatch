import React from "react";
import { TextField } from "@material-ui/core";
import Modal from "react-bootstrap/Modal";
import InputAdornment from "@material-ui/core/InputAdornment";
import CreateIcon from "@material-ui/icons/Create";
import addIncident from "../network/community";
import useLocalStorage from "react-use-localstorage";

const CreateIncident = ({ show, setShow }) => {
    const [token, setToken] = useLocalStorage("token", "");
    const [incident, setIncident] = useState({
        title: "",
        category: "",
        description: "",
    });

    const handleClose = () => {
        setShow(false);
    };
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{ marginTop: "5%" }}
            >
                <h2 className="modal-title">New Incident</h2>

                <div className="modal-body">
                    <form className="modal-form">
                        <TextField
                            variant="outlined"
                            label="Title"
                            placeholder="Title"
                            id="Title"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreateIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            label="Category"
                            placeholder="Category"
                            id="Category"
                            className="modal-form-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreateIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            label="Description"
                            multiline={true}
                            id="email"
                            className="modal-form-input"
                            rows={5}
                        />
                    </form>
                </div>

                <Modal.Footer>
                    <button className="modal-btn" onClick={handleClose}>
                        Close
                    </button>
                    <button className="modal-btn">Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateIncident;

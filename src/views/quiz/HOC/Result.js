import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types'

const Result = ({score, responses}) => {

    let history = useHistory();
    // console.log("history", history);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const goBack = () => history.push("/quiz");

    return (
        <div>
        <Button onClick={toggle} disabled={responses<10}>Submit</Button>
        <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>ScoreBoard</ModalHeader>
        <ModalBody>
            Your score is {score} out of 10
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Ok</Button>
          <Button onClick={goBack}>Go back to Quiz Page</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}

Result.propTypes = {
  score : PropTypes.number,
  responses : PropTypes.number
}

export default Result

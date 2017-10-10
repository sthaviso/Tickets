/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';

let input;
const MessageInput = ({onSubmitMessage}) => (
  <div>
  <form onSubmit={(e) => {
    e.preventDefault();
    onSubmitMessage(input.value);
    input.value = '';}}>
    <FormGroup>
      <InputGroup>
        <FormControl
          componentClass="textarea"
          placeholder="write your message..."
          inputRef={(ref) => {input = ref}}/>
        <InputGroup.Button>
          <Button type="submit">Send</Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  </form>

  </div>
);

export default MessageInput;

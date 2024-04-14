import { useState } from 'react';
import logo from './assets/chatgpt-logo.png';
import { Box, Typography, Modal, TextField, LinearProgress } from '@mui/material';
import axios from 'axios';
import GPTResponse from './components/GPTResponse';

function App() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const host = "http://localhost:3000/";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnChange = (e) => {
    setPrompt(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("");
    setLoading(true);
    const res = await axios.post(host + "chat", { prompt });
    setResponse(res);
    setLoading(false);
    console.log(res)
  }

  return (
    <div className="app">
      <img src={logo} />
      <button onClick={handleOpen} className='btn'>Ask me anything!</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='chatgpt-modal'
      >
        <Box className='container'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Drop Your Questions
          </Typography>
          <form id='form' className='chat-form'>
            <TextField value={prompt} onChange={handleOnChange} id="outlined-basic" label="Query" variant="outlined" sx={{ margin: "15px 0", width: "100%" }} />
            <button type='submit' className="btn" onClick={handleSubmit}>Submit</button>
          </form>
          {loading && <LinearProgress />}
          {response && <GPTResponse response={response} />}
        </Box>
      </Modal>
    </div>
  )
}

export default App

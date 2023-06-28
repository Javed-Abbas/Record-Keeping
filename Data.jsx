import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


 const Data = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form])
    setForm(form)
  };

  const removeItem = (index) =>{
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <>
    <div className="Data">
      <Stack direction="row" spacing={2}>
      <TextField value={form.name} onChange={(event) => setForm({...form, name: event.target.value})} id="outlined-basic" label="name" variant="outlined" />
      <TextField value={form.email} onChange={(event) => setForm({...form, email: event.target.value})} id="outlined-basic" label="email" variant="outlined" />
      <Button onClick={addData} variant="contained" color="primary">
        <AddIcon/>
      </Button>
      </Stack>
    </div> 
    <div className='inputs'>
      <div className='values'>
        <h4>name</h4>
        <h4>email</h4>
        <h4>remove</h4>
      </div>
      {
        data.map((element,index) =>{
          return(
          <div className='values'>
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Button onClick={() => removeItem(index) } variant="contained" color="primary">
              <DeleteIcon/>
            </Button>
          </div>
        )})
      }
  </div>
  </>
    ) 
      
  }
 export default Data
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {importInfo} from '../../../redux/action'
import callApi from '../../../untils/callApi'
import './ChangeInfo.scss'

interface FormValues{
    name: string,
    image?: string,
    date: string,
    job: string,
    email: string,
    phone: string
}
function ChangeInfo() {
    const dispatch= useDispatch();
    const {register, handleSubmit,reset} = useForm<FormValues>()
    const onHandleSubmit: SubmitHandler<FormValues> = data => {
        // console.log(data)
        dispatch(importInfo(data))
        async function postApi(){ 
            await callApi('infor/1','PUT',data)
            console.log(data)
            reset()
        }
        postApi()
       
      
    }

    return (
        
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            <TextField {...register("name")} id="outlined-basic" label="Name" variant="outlined" />
            <TextField {...register("date")}  id="outlined-basic" label="Date of birth" variant="outlined" />
            <TextField {...register("job")}  id="outlined-basic" label="Job" variant="outlined" />
            <TextField {...register("email")}  id="outlined-basic" label="Email" variant="outlined" />
            <TextField {...register("phone")}  id="outlined-basic" label="Phone" variant="outlined" /><br/>
            <Button variant="contained" type="submit">Thay đổi</Button>
           
        </form>
    )
}

export default ChangeInfo

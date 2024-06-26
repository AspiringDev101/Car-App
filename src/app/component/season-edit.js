"use client"
import React ,{useEffect ,  useState} from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './component-css/season.css'
import SeasonService from '../services/season.service'

const SeasonAddComponent =  (props) => {
  const [initialState, setinitialState] = useState({ });   

  useEffect(() => {
   getRowByID(props.id)
  }, []);
  
  const getRowByID = async (rowID) =>{
    SeasonService.getRowByID(rowID).then((res)=>{
        console.log(res)
        let newData  = {
          seasonName:res.data[0].SeasonName,
          startingDate:new Date(res.data[0].StartingDate).toISOString().split('T')[0],
          endingDate:new Date(res.data[0].EndingDate).toISOString().split('T')[0],
          margin:res.data[0].Margin,
          status:res.data[0].Status == 1 ? true: false 
      }
        setinitialState(newData)
    }).catch((err)=>{
      console.log(err)
    })
  }
    const validationSchema = Yup.object().shape({
        seasonName: Yup.string().required('season is required'),
        startingDate: Yup.string().required('starting Date is required.'),
        endingDate: Yup.string().required('ending Date is required.'),
        margin: Yup.string().required('margin is required.'),
        status: Yup.string().required('status is required.'),
      });

      const handleSubmit = async (values,{ resetForm }) => {
        console.log(values);
        let data  = {
            SeasonID:props.id,
            SeasonName:values.seasonName,
            StartingDate:values.startingDate,
            EndingDate:values.endingDate,
            Margin:values.margin,
            Status:values.status == true ? 1:0
        }
        SeasonService.updateData(data).then((res)=>{
          let newData  = {
            seasonName:'',
            startingDate:'',
            endingDate:'',
            margin:'',
            status:false
        }
          setinitialState(newData)
          resetForm()
           document.getElementById('season-Link').click()
            let list =  SeasonService.getAll();
            console.log(list)


        }).catch( (e) =>{ 
            console.log(e)
            
        })
      };

    return (
        <div className='season-wrapper'>
            <div className='season-heading'>
                <h2>Edit a Season</h2>
            </div>
            <div className='dashboard-content-box'>
            <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize= {true}
    
      >
        <Form>
          <div className="form-input">
            <label htmlFor="seasonName" className="input-label">
            Season name
            </label>
            <div className="form-input-div">
              <Field name="seasonName" type="text" />
            </div>
            <div className='form-input-error'>
              <ErrorMessage name="seasonName" component="span" className="form-error" />
            </div>
          </div>
          <div className='date-fields'>
          <div className="form-input">
            <label htmlFor="startingDate" className="input-label">
            Starting date
            </label>
            <div className="form-input-div">
              <Field name="startingDate" type="date" />
            </div>
            <div className='form-input-error'>
              <ErrorMessage name="startingDate" component="span" className="form-error" />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="endingDate" className="input-label">
            Ending date
            </label>
            <div className="form-input-div">
              <Field name="endingDate" type="date" />
            </div>
            <div className='form-input-error'>
              <ErrorMessage name="endingDate" component="span" className="form-error" />
            </div>
          </div>
          </div>
          <div className="form-input">
            <label htmlFor="margin" className="input-label">
            Margin
            </label>
            <div className="form-input-div">
              <Field name="margin" type="number" />
            </div>
            <div className='form-input-error'>
              <ErrorMessage name="margin" component="span" className="form-error" />
            </div>
          </div>
          <div className="form-input status-checkbox">
              {/* <Field name="status" type="checkbox" /> */}
              <label className="checkbox-container">
              <Field name="status" type="checkbox"  className="checkbox"/>
              <span className="checkmark"></span>
              </label>
            <label htmlFor="status" className="input-label">
            Active
            </label>
            </div>
            <br/>
          <button type="submit" className="form-btn">
          Update this season
          </button>
        </Form>
      </Formik>
      <Link 
        href={'http://localhost:3000/seasons/list'} 
        target='_SELF' 
        id='season-Link'
        >
        </Link>
            </div>
        </div>
    );
}
export default SeasonAddComponent;

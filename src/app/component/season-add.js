"use client"
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './component-css/season.css'
import SeasonService from '../services/season.service'

const SeasonAddComponent =  () => {
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
            SeasonName:values.seasonName,
            StartingDate:values.startingDate,
            EndingDate:values.endingDate,
            Margin:values.margin,
            Status:values.status == true ? 1:0
        }
        SeasonService.insertData(data).then((res)=>{
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
                <h2>Add a new season</h2>
            </div>
            <div className='dashboard-content-box'>
            <Formik
        initialValues={{ seasonName: '', startingDate:'', endingDate: '', margin:'',status:false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    
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
          Save this season
          </button>
        </Form>
      </Formik>
      <Link 
        href={'http://localhost:3000/season/list'} 
        target='_SELF' 
        id='season-Link'
        >
        </Link>
            </div>
        </div>
    );
}
export default SeasonAddComponent;

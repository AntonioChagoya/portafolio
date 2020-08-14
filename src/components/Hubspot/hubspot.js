import HubspotForm from 'react-hubspot-form'

 
<HubspotForm
   portalId='8274838'
   formId='ef87ada1-440f-401c-8ba1-a869dedda1c7'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />

   
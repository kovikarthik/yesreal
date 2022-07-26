import React from 'react'
import './Bussiness.css'
import saas from '../assets/saas.png'

export default function Sass() {
  const sasimg='//azurecomcdn.azureedge.net/cvt-3f057ebb0edf14bbfcd43b4e569fa7e2568236ce1d889f278f40b27bbd8ff476/images/page/resources/cloud-computing-dictionary/what-is-saas/what-is-saas.png'
  return (
    <>
    <div style={{ textAlign: "left", padding: '2rem', paddingTop: '0rem' }}>
      <br />
      <h4>Software as a service</h4><hr />

      <div style={{ margin:'2rem',marginTop: '0rem' }}>
      <br></br>Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet. Common examples are email, calendaring and office tools (such as Microsoft Office 365).
      <br></br>SaaS provides a complete software solution which you purchase on a pay-as-you-go basis from a cloud service provider. You rent the use of an app for your organisation and your users connect to it over the Internet, usually with a web browser. All of the underlying infrastructure, middleware, app software and app data are located in the service provider’s data center. The service provider manages the hardware and software and with the appropriate service agreement, will ensure the availability and the security of the app and your data as well. SaaS allows your organisation to get quickly up and running with an app at minimal upfront cost.
      <br></br>
      <div className='scrcenter'>
        <img src={saas} style={{width:'100%'}}/>
      </div>
      {/* <hr></hr> */}
        {/* <div className='row'>
        <div className='col'>Hosted applications/apps</div>
        <div className='col'>Development tools, database management, business analytics</div>
        <div className='col'>Operating systems</div>
        <div className='col'>Servers and storage</div>
        <div className='col'>Networking firewalls/security</div>
        <div className='col'>Data center physical plant/building</div><hr></hr>
      </div> */}
      </div>
      <h4>SaaS advantages for enterprise IT</h4><hr></hr>
      <div style={{ margin:'2rem',marginTop: '0rem' }}>
      As employees have become more distributed and remote, SaaS allows authorized users to access an application from anywhere on any authorized device, without having to be behind the company firewall. This also allows for greater real-time collaboration, because SaaS enables concurrent usage of the same tool or document.

     <br></br> SaaS also gives companies more flexibility as they grow, as they only have to pay for the employees using the software, if usage is tracked and managed correctly.

      This model also lowers the maintenance burden on IT teams to stay up-to-date with the latest releases or installing patches such as security updates, because the SaaS provider handles all that.
      </div>
      <h4>SaaS risks and challenges</h4><hr></hr>
      <div style={{ margin:'2rem',marginTop: '0rem' }}>
      <br></br>SaaS also comes with a new set of risks, most of which boil down to a reliance on a third-party provider to maintain the security and uptime of their services for users.

      <br></br>Unlike the highly customizable business applications of old, customers are also reliant on the provider to build new features and squash bugs in a timely manner. They also require the provider to maintain the software availability. As we’ve seen countless times in the cloud era, outages at a service provider can affect thousands, even millions, of customers all at once.

      <br></br>There are also portability restrictions that come with an increasing reliance on SaaS. Moving an entire company’s worth of CRM data over the internet to a different SaaS provider (or back to a private data center) is no small feat and would require a strong reason to do so.

      <br></br>Security and privacy are also issues, especially if a trusted service provider experiences a data breach. However, the industry consensus is that SaaS security is much stronger than the security in most enterprise data centers, though a SaaS provider breach will affect many more users than a breach at an individual private data center.
      </div>
      </div>
    </>
  )
}

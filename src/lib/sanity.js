import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '5nkpumup',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03'
})

export const writeClient = createClient({
  projectId: '5nkpumup',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.REACT_APP_SANITY_TOKEN
})

// Helper functions for fetching data
export const getJobVacancies = () => {
  return client.fetch('*[_type == "jobVacancy"] | order(_createdAt desc)')
}

export const getBlogPosts = () => {
  return client.fetch('*[_type == "blogPost"] | order(publishedAt desc)')
}

export const getCaseStudies = () => {
  return client.fetch('*[_type == "caseStudy"] | order(_createdAt desc)')
}

export const getContactEnquiries = () => {
  return client.fetch('*[_type == "contactEnquiry"] | order(_createdAt desc)')
}

// Form submission functions
export const submitContactForm = async (formData) => {
  try {
    const result = await writeClient.create({
      _type: 'contactEnquiry',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      status: 'new'
    });
    
    // Send thank you email
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact', data: formData })
    });
    
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

export const submitJobApplication = async (applicationData) => {
  try {
    return await writeClient.create({
      _type: 'jobApplication',
      jobId: applicationData.jobId,
      applicantName: applicationData.name,
      email: applicationData.email,
      phone: applicationData.phone,
      coverLetter: applicationData.coverLetter,
      resume: applicationData.resume,
      status: 'new'
    })
  } catch (error) {
    console.error('Error submitting job application:', error);
    throw error;
  }
}

export const subscribeNewsletter = async (email, name = '') => {
  try {
    const result = await writeClient.create({
      _type: 'newsletter',
      email: email,
      name: name,
      status: 'active'
    });
    
    // Send welcome email
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'newsletter', data: { email, name } })
    });
    
    return result;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}
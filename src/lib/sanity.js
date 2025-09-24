import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '5nkpumup',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
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
    return await client.create({
      _type: 'contactEnquiry',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      status: 'new'
    })
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
}

export const submitJobApplication = async (applicationData) => {
  try {
    return await client.create({
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
    throw new Error('Failed to submit job application');
  }
}

export const subscribeNewsletter = async (email, name = '') => {
  try {
    return await client.create({
      _type: 'newsletter',
      email: email,
      name: name,
      status: 'active'
    })
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
}
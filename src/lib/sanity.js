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
  return writeClient.fetch(`
    *[_type == "jobVacancy" && isActive == true] | order(_createdAt desc) {
      _id,
      title,
      department,
      location,
      jobType,
      experienceLevel,
      description,
      responsibilities,
      requirements,
      skills,
      benefits,
      salaryRange,
      applicationDeadline,
      isFeatured,
      postedDate,
      _createdAt
    }
  `)
}

export const getBlogPosts = () => {
  return writeClient.fetch(`
    *[_type == "blogPost" && isPublished == true] | order(publishedDate desc) {
      _id,
      title,
      slug,
      excerpt,
      "body": content,
      category,
      "publishedAt": publishedDate,
      "featuredImage": featuredImage.asset->url,
      author,
      _createdAt
    }
  `)
}

export const getCaseStudies = () => {
  return writeClient.fetch(`
    *[_type == "caseStudy" && isPublished == true] | order(_createdAt desc) {
      _id,
      title,
      slug,
      clientName,
      industry,
      companySize,
      location,
      "clientLogo": clientLogo.asset->url,
      "featuredImage": featuredImage.asset->url,
      challenge,
      objectives,
      solution,
      technologiesUsed,
      "projectGallery": projectGallery[].asset->url,
      websiteUrl,
      appStoreUrl,
      playStoreUrl,
      instagramUrl,
      results,
      metricsImproved,
      testimonial,
      testimonialAuthor,
      testimonialPosition,
      keyTakeaways,
      projectDuration,
      teamSize,
      completedDate,
      category,
      isFeatured,
      _createdAt
    }
  `)
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

export const createBlogPost = async (blogData) => {
  try {
    return await writeClient.create({
      _type: 'blogPost',
      title: blogData.title,
      slug: {
        _type: 'slug',
        current: blogData.slug
      },
      excerpt: blogData.excerpt,
      body: blogData.body,
      category: blogData.category,
      publishedAt: blogData.publishedAt || new Date().toISOString(),
      featuredImage: blogData.featuredImage
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

export const deleteBlogPost = async (documentId) => {
  try {
    return await writeClient.delete(documentId);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}
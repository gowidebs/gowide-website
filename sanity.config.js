import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

const blogPost = {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'excerpt', title: 'Excerpt', type: 'text'},
    {name: 'content', title: 'Content', type: 'text'},
    {name: 'category', title: 'Category', type: 'string'},
    {name: 'author', title: 'Author', type: 'string'},
    {name: 'publishedDate', title: 'Published Date', type: 'datetime'},
    {name: 'isPublished', title: 'Published', type: 'boolean'},
    {name: 'featuredImage', title: 'Featured Image', type: 'image'}
  ]
}

const caseStudy = {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    // 1. Title & Client Overview
    {name: 'title', title: 'Title', type: 'string', description: 'Result-focused title (e.g., "Scaling ABC Corp with Cloud Migration")'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'clientName', title: 'Client Name', type: 'string'},
    {name: 'industry', title: 'Industry', type: 'string'},
    {name: 'companySize', title: 'Company Size', type: 'string', options: {list: ['Startup', 'SME', 'Enterprise']}},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'clientLogo', title: 'Client Logo', type: 'image'},
    {name: 'featuredImage', title: 'Featured Image', type: 'image'},
    
    // 2. Challenge / Problem Statement
    {name: 'challenge', title: 'The Challenge', type: 'text', description: 'Business pain points and what was at risk'},
    
    // 3. Objectives
    {name: 'objectives', title: 'Objectives', type: 'array', of: [{type: 'string'}], description: 'What the client wanted to achieve'},
    
    // 4. Our Approach / Solution
    {name: 'solution', title: 'Our Solution', type: 'text', description: 'Step-by-step process and approach'},
    {name: 'technologiesUsed', title: 'Technologies Used', type: 'array', of: [{type: 'string'}]},
    {name: 'projectGallery', title: 'Project Gallery', type: 'array', of: [{type: 'image'}], description: 'Screenshots, diagrams, UI images'},
    {name: 'websiteUrl', title: 'Website URL', type: 'url'},
    {name: 'appStoreUrl', title: 'App Store URL', type: 'url'},
    {name: 'playStoreUrl', title: 'Play Store URL', type: 'url'},
    {name: 'instagramUrl', title: 'Instagram URL', type: 'url'},
    
    // 5. Results & Impact
    {name: 'results', title: 'Results & Impact', type: 'text', description: 'Quantified results and business outcomes'},
    {name: 'metricsImproved', title: 'Key Metrics', type: 'array', of: [{
      type: 'object',
      fields: [
        {name: 'metric', title: 'Metric', type: 'string'},
        {name: 'improvement', title: 'Improvement', type: 'string'},
        {name: 'beforeValue', title: 'Before', type: 'string'},
        {name: 'afterValue', title: 'After', type: 'string'}
      ]
    }]},
    
    // 6. Client Testimonial
    {name: 'testimonial', title: 'Client Testimonial', type: 'text'},
    {name: 'testimonialAuthor', title: 'Testimonial Author', type: 'string'},
    {name: 'testimonialPosition', title: 'Author Position', type: 'string'},
    
    // 7. Key Takeaways
    {name: 'keyTakeaways', title: 'Key Takeaways', type: 'array', of: [{type: 'string'}]},
    
    // Project Details
    {name: 'projectDuration', title: 'Project Duration', type: 'string'},
    {name: 'teamSize', title: 'Team Size', type: 'string'},
    {name: 'completedDate', title: 'Completed Date', type: 'date'},
    {name: 'category', title: 'Service Category', type: 'string', options: {list: ['Web Development', 'Mobile App', 'Cloud Migration', 'Digital Transformation', 'E-commerce', 'Custom Software']}},
    
    // Publishing
    {name: 'isPublished', title: 'Published', type: 'boolean', initialValue: false},
    {name: 'isFeatured', title: 'Featured Case Study', type: 'boolean', initialValue: false}
  ]
}

const jobVacancy = {
  name: 'jobVacancy',
  title: 'Job Vacancies',
  type: 'document',
  fields: [
    {name: 'title', title: 'Job Title', type: 'string'},
    {name: 'department', title: 'Department', type: 'string', options: {list: ['Technology', 'Marketing', 'Design', 'Sales', 'Operations', 'HR']}},
    {name: 'location', title: 'Location', type: 'string', options: {list: ['Dubai, UAE', 'Kochi, India', 'Remote', 'Hybrid']}},
    {name: 'jobType', title: 'Job Type', type: 'string', options: {list: ['Full Time', 'Part Time', 'Contract', 'Internship']}},
    {name: 'experienceLevel', title: 'Experience Level', type: 'string', options: {list: ['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Manager']}},
    {name: 'description', title: 'Job Description', type: 'text'},
    {name: 'responsibilities', title: 'Key Responsibilities', type: 'array', of: [{type: 'string'}]},
    {name: 'requirements', title: 'Requirements', type: 'array', of: [{type: 'string'}]},
    {name: 'skills', title: 'Required Skills', type: 'array', of: [{type: 'string'}]},
    {name: 'benefits', title: 'Benefits', type: 'array', of: [{type: 'string'}]},
    {name: 'salaryRange', title: 'Salary Range', type: 'string'},
    {name: 'applicationDeadline', title: 'Application Deadline', type: 'date'},
    {name: 'isActive', title: 'Active', type: 'boolean', initialValue: true},
    {name: 'isFeatured', title: 'Featured Job', type: 'boolean', initialValue: false},
    {name: 'postedDate', title: 'Posted Date', type: 'date', initialValue: () => new Date().toISOString().split('T')[0]}
  ]
}

const contactEnquiry = {
  name: 'contactEnquiry',
  title: 'Contact Enquiries',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phone', title: 'Phone', type: 'string'},
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'message', title: 'Message', type: 'text'},
    {name: 'status', title: 'Status', type: 'string', options: {list: ['new', 'contacted', 'closed']}}
  ]
}

const newsletter = {
  name: 'newsletter',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'status', title: 'Status', type: 'string', options: {list: ['active', 'unsubscribed']}}
  ]
}

const jobApplication = {
  name: 'jobApplication',
  title: 'Job Applications',
  type: 'document',
  fields: [
    {name: 'jobId', title: 'Job ID', type: 'string'},
    {name: 'applicantName', title: 'Applicant Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phone', title: 'Phone', type: 'string'},
    {name: 'coverLetter', title: 'Cover Letter', type: 'text'},
    {name: 'resume', title: 'Resume', type: 'file'},
    {name: 'status', title: 'Status', type: 'string', options: {list: ['new', 'reviewing', 'interviewed', 'hired', 'rejected']}}
  ]
}

export default defineConfig({
  name: 'gowide-studio',
  title: 'GoWide Studio',
  projectId: '5nkpumup',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [blogPost, caseStudy, jobVacancy, contactEnquiry, newsletter, jobApplication]
  },
  document: {
    actions: (prev, context) => {
      return [...prev]
    }
  }
})
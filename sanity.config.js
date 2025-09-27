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
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'client', title: 'Client', type: 'string'},
    {name: 'category', title: 'Category', type: 'string'},
    {name: 'completedDate', title: 'Completed Date', type: 'date'},
    {name: 'featuredImage', title: 'Featured Image', type: 'image'}
  ]
}

const jobVacancy = {
  name: 'jobVacancy',
  title: 'Job Vacancies',
  type: 'document',
  fields: [
    {name: 'title', title: 'Job Title', type: 'string'},
    {name: 'department', title: 'Department', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'type', title: 'Job Type', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'requirements', title: 'Requirements', type: 'text'},
    {name: 'isActive', title: 'Active', type: 'boolean'}
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
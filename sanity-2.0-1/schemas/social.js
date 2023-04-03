import { Rule } from 'postcss'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    
    {
      name:"title",
      title:"title",
      description:"Platform for social media",
      type:"string",
    },
    {
      name:"url",
      title:"Url",
      type:"url",
    },
  ],

 
})

// import blockContent from './blockContent'
// import category from './category'
import pageInfo from './pageInfo'
// import author from './author'
import experience from './experience'
import skill from './skill'
import project from './project'
import social from './social'
// import { createSchema } from 'sanity'
// import { schemaTypes  } from 'sanity'

export const schemaTypes = [pageInfo, experience, skill, project, social]


// export default createSchema({
//     name:"default",
//     types: schemaTypes.concat([
//         pageInfo,
//         experience,
//         skill,
//         project,
//         social,
//         blockContent
//     ])
// })
export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfa1600ff70a2b78d8da182',
                  title: 'Sanity Studio',
                  name: 'test-sapper-sanity-studio',
                  apiId: 'df11ce81-887c-4d7b-9b7a-47a030e51b50'
                },
                {
                  buildHookId: '5dfa1600fb22ac9c966017e4',
                  title: 'Blog Website',
                  name: 'test-sapper-sanity',
                  apiId: '6066b7f2-2efd-4c3b-b17a-17f85c5a4286'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/budparr/test-sapper-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sapper-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

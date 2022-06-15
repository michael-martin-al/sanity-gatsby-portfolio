export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62aa5737c097f516d02bd191',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zkuuomsm',
                  apiId: '4883d866-721d-4d45-9cb8-3084aa1972a8'
                },
                {
                  buildHookId: '62aa5737c63cd110897a2054',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9r65a1d5',
                  apiId: 'c0098369-5c6c-4f6c-ae63-a3e3548f68bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michael-martin-al/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9r65a1d5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

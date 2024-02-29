export default defineAppConfig({
  docus: {
    title: 'itskhri_',
    description: 'Achmad Yusuf Bukhori Blogs Documentation.',
    image: 'https://dthezntil550i.cloudfront.net/q3/latest/q32309200429316910025245669/8ead3082-4335-452c-a968-4e86d276f158.png',
    socials: {
      instagram: 'itskhri_',
      github: 'kangabut',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docs',
      owner: 'justkhri',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})

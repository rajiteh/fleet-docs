module.exports = {
  docs: [
    'index',
    'quickstart',
    'concepts',
    'architecture',
    'examples',
    {
      type: 'category',
      label: 'Operator Guide',
      items:[
        {
          'Managing Clusters':
          {
            'Registering':
            [
              {type:'doc', id:'cluster-overview'},
              {type:'doc', id:'cluster-tokens'},
              {type:'doc', id:'agent-initiated'},
              {type:'doc', id:'manager-initiated'},
            ],
          },
          'Cluster Groups':
          [
            {type:'doc', id:'cluster-group'},
          ],
        },
        'namespaces',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items:[
        {
          'Managing Git Repos':
          [
          {type:'doc', id:'gitrepo-add'},
          {type:'doc', id:'gitrepo-structure'},
          {type:'doc', id:'gitrepo-targets'},
          {type:'doc', id:'bundle-diffs'},
          {type:'doc', id:'webhook'},
          {type:'doc', id:'imagescan'},
          {type:'doc', id:'cluster-bundles-state'},
          ],
        },
      ],
    },
    'troubleshooting',
  {
    type: 'category',
    label: 'Advanced Users',
    items:[
        'advanced-users',
        {
          'Installation':
          [
            {type:'doc', id:'installation'},
            {type:'doc', id:'single-cluster-install'},
            {type:'doc', id:'multi-cluster-install'},
            {type:'doc', id:'uninstall'},
          ],
        },
    ],
  },
  ],
};
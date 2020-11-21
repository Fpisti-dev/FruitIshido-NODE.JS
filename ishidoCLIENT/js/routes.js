routes = [
    {
      path: '/',
      componentUrl: './index.html',
    },
    {
      path: '/top10/',
      componentUrl: './pages/top10.html',
    },
    {
      path: '/about/',
      url: './pages/about.html',
    },
    {
      path: '/top10form/:id/',
      componentUrl: './pages/top10form.html',
    },
    {
      path: '/manual/',
      componentUrl: './pages/manual.html',
    },    
    // Default route (404 page). MUST BE THE LAST
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ];
const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: miguelapb35/sapper-tutorial.git,
        user: {
            name: 'Miguel',
            email: 'miguelapb35@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/teammembers', function() {
    return {
      data: [{
        type: 'teammembers',
        id: 1,
        attributes: {
          name: 'Michael Andorfer',
          github: 'andorfermichael',
          email: 'mandorfer.mmt-b2014@fh-salzburg.ac.at',
          image: 'https://avatars3.githubusercontent.com/u/11174651?v=3&s=400'
        }
      }, {
        type: 'teammembers',
        id: 2,
        attributes: {
          name: 'Nicola Deufemia',
          github: 'dagopert',
          email: 'ndeufemia.mmt-b2014@fh-salzburg.ac.at',
          image: 'https://avatars0.githubusercontent.com/u/11182724?v=3&s=400'
        }
      }]
    };
  });

  // Pass through login to mock server
  this.passthrough('/token');
}
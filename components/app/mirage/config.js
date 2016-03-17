export default function() {
  this.get('/teammembers', function() {
    return {
      data: [{
        type: 'teammembers',
        id: 1,
        attributes: {
          name: 'Michael Andorfer',
          github: 'andorfermichael',
          email: 'mandorfer.mmt-b2014@fh-salzburg.ac.at'
        }
      }, {
        type: 'teammembers',
        id: 2,
        attributes: {
          name: 'Nicola Deufemia',
          github: 'dagopert',
          email: 'ndeufemia.mmt-b2014@fh-salzburg.ac.at'
        }
      }]
    };
  });
}
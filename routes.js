var routes = function(app) {  
  
    app.options('/*', function(req, res) {
      res.status(200);
      res.send({});
    });
  
    app.get('/stores', function(req, res) {

      var response = [
        {
          "id": 1001,
          "name": "MyStore A"
        },
        {
          "id": "1002",
          "name": "MyStore B"
        }
      ];

      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(response);
    });
  
    app.get('/categories', function(req, res) {

      var response = {
        "categories": [
          {
            "id": 5001,
            "name": "Books"
          },
          {
            "id": "5010",
            "name": "Games"
          }
        ]
      };

      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(response);
    });
  
    app.get('/products', function(req, res) {
      var esc = encodeURIComponent
      var query = Object.keys(req.query)
                        .map(k => esc(k) + '=' + esc(req.query[k]))
                        .join('&')
      var obj = query.split("&").reduce(function(prev, curr, i, arr) {
        var p = curr.split("=");
        prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
        return prev;
      }, {});

      if(obj && obj.term == "noproduct")
      {
        /**
         * example of empty response
         */
        response = 
        {
          "products": [
          ],
          "pagination": {
            "currentPage": 1,
            "limit": 50,
            "offset": 50,
            "previousOffset": 0,
            "pageCount": 0,
            "totalCount": 0
          }
        }
      }
      else 
      {
        response = {
          "products": [
            {
              "id": 2001,
              "name": "Harry Potter",
              "description": "New adventures of a young wizard.",
              "productUrl": "https://en.wikipedia.org/wiki/Harry_Potter",
              "imageUrl": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
            },
            {
              "id": 2010,
              "name": "Oliver Twist",
              "description": "Amazing story of young adventurer.",
              "productUrl": "https://en.wikipedia.org/wiki/Oliver_Twist",
              "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Olivertwist_front.jpg/2560px-Olivertwist_front.jpg"
            }
          ],
          "pagination": {
            "currentPage": 1,
            "limit": 50,
            "offset": 50,
            "previousOffset": 0,
            "pageCount": 1,
            "totalCount": 2
          }
        }
      }

      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(response);
    });
  
    
  };
   
  module.exports = routes;
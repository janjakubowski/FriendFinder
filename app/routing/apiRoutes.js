// ===============================================================================
// These data sources hold arrays of information on table-data, waitinglist, etc.

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests

  app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      // res.json(false);
    }
  });

};

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   tableData.length = 0;
  //   waitListData.length = 0;

  //   res.json({ ok: true });
  // });
// };

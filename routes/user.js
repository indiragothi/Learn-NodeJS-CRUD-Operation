const express = require('express');
const {
       handleGetAllUser,
       handleGetUserById, 
       handleUpdateUserById, 
       handleDeleteUserById,
       handleCreateNewUser
    } = require('../controllers/user');

const router = express.Router();

// REST API
router.route("/")
    .get(handleGetAllUser)
    .post(handleCreateNewUser);

router.route("/:id")
   .get(handleGetUserById)
   .patch(handleUpdateUserById)

   .delete(handleDeleteUserById);


module.exports = router;





// router.get("/users", async(req, res)=>{
//     const allDbUsers = await User.find({});

//     const html = `
//        <ul>
//           ${allDbUsers.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
//        </ul>   
//     `;
//     res.send(html);
// });


    // Read data from JSON file
// const readDataFromFile = () => {
//     try {
//       const data = fs.readFileSync('./MOCK_DATA.json', 'utf8');
//       return JSON.parse(data);
//     } catch (err) {
//       console.error('Error reading data from file:', err.message);
//       return [];
//     }
//   };


  // Write data to JSON file
// const saveToFile = (data) => {
//     try {
//       fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(data), 'utf8');
//     } catch (err) {
//       console.error('Error writing data to file:', err.message);
//     }
//   };




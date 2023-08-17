const sequelize = require("./config/db");
const User = require("./module/userModule");
const mockUsers = require("./mockUsers");

async function seed() {
  try {
    // Sync the model to create the table if it doesn't exist
    await User.sync({ force: true });

    // Insert mock users into the database
    await User.bulkCreate(mockUsers);

    console.log("Mock data seeded successfully");
  } catch (error) {
    console.error("Error seeding mock data:", error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
}

// Invoke the seed function
seed();

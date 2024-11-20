const express = require("express");
const users = require("./MOCK_DATA.json");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// APIs

app.get("/api/v1/users", (req, res) => {
  try {
    return res.json(users);
  } catch (error) {
    throw new Error("users not found", error.message);
  }
});

app.get("/api/v1/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
  } catch (error) {
    throw new Error("user not found", error.message);
  }
});

app.post("/api/v1/users", (req, res) => {
  const body = req.body;

  const newUser = { ...body, id: users.length + 1 };
  users.push(newUser);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to save data." });
    }
    res.json({ status: "confirmed", user: newUser });
  });
});

app.put("/api/v1/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  users[userIndex] = { ...users[userIndex], ...body };
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to save data." });
    }
    res.json({ status: "updated", user: users[userIndex] });
  });
});

app.delete("/api/v1/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  const deletedUser = users.splice(userIndex, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: "error", message: "Failed to save data." });
    }
    res.json({ status: "deleted", user: deletedUser[0] });
  });
});

// Start server
app.listen(5000, () => {
  console.log("app started running");
});

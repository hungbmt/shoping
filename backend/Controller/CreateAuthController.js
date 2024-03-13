const express = require("express");
const bcrypt = require("bcrypt");
const authen = require("./../Model/authen");
const { AccessToken, RefreshToken } = require("../Config/Token");
const { listenerCount } = require("../Model/produc");
const jwt = require("jsonwebtoken");

let refeshTokenss = [];
const CreateAuthController = {
  ApiRegister: async (req, res) => {
    try {
      const saltRounds = 10;
      const { username, email, password } = req.body;
      const isAdmins = "false";
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      const issAdmin = bcrypt.hashSync(isAdmins, salt);
      const newauthen = new authen({
        username,
        email,
        password: hash,
        isAdmin: issAdmin,
      });
      newauthen.save().then((data) => res.status(201).json(data));
    } catch (error) {
      return res.status(500).json("error Saver", error.message);
    }
  },
  ApiLogin: async (req, res) => {
    const user = await authen.findOne({ username: req.body.username });
    if (!user) {
      return res.status(500).json("username Không tồn tại");
    }
    const valipassword = await bcrypt.compare(req.body.password, user.password);
    if (valipassword === true && user) {
      const AccessTokens = AccessToken(user);
      const RefreshTokens = RefreshToken(user);
      refeshTokenss.push(RefreshTokens);
      res.cookie("RefreshTokens", RefreshTokens, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      const { password, ...hide } = user._doc;
      return res.status(200).json({
        message: "Đăng Nhập Thành Công",
        accessToken: AccessTokens,
        refreshTokens: RefreshTokens,
        // user: user,
        // user: hide,
      });
    } else if (valipassword === false) {
      return res.status(400).json({
        message: "Mật Khẩu Sai",
      });
    }
  },
  refeshToken: async (req, res) => {
    const refreshToken = req.cookies.RefreshTokens;
    if (!refreshToken) return res.status(401).json("you are not authention");
    console.log(refeshTokenss.includes(refreshToken));
    if (!refeshTokenss.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.REFRESHTOKEN, (err, user) => {
      if (err) return console.log(err);
      refeshTokenss = refeshTokenss.filter((token) => token !== refreshToken);
      const newAccessTokens = AccessToken(user);
      const newRefreshTokens = RefreshToken(user);
      console.log(newAccessTokens, newRefreshTokens);
      refeshTokenss.push(newRefreshTokens);
      res.cookie("RefreshTokens", newRefreshTokens, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.json({
        accessToken: newAccessTokens,
        refeshTokens: newRefreshTokens,
      });
    });
  },

  ApiLogOut(req, res) {
    res.clearCookie("RefreshTokens");
    res.json({
      message: "Logout successfully",
    });
  },
};

module.exports = CreateAuthController;

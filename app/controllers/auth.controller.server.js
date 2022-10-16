import express from 'express';

// need passport
import passport from 'passport';

// need to include the user model from authentication
import User from '../models/user.js';

//Display Functions
export function DisplayLoginPage(req,res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', message: req.flash('loginMessage')});
    }
    return res.redirect('/movie-list');
}
export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage')});
    }

    return res.redirect('/movie-list');
}
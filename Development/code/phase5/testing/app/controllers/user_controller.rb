# # class UserController < ApplicationController
# #     def create
# #       user = User.new(email: params[:email], password: params[:password])
# #       if user.save
# #         # handle successful save
# #       else
# #         # handle validation errors
# #       end
# #     end
# #   end
# class UserController < ApplicationController
#   require 'sinatra'
#   require 'sinatra/activerecord'
# require 'bcrypt'
#     get '/login' do
#         erb :login
#       end
#       post '/login' do
#         user = User.find_by(email: params[:email])
#         if user && BCrypt::Password.new(user.password) == params[:password]
#           session[:user_id] = user.id
#           redirect '/homepage'
#         else
#           @error = 'Invalid email or password'
#           erb :login
#         end
#       end
#       get '/register' do
#         erb :register
#       end
#       post '/register' do
#         user = User.new(email: params[:email], password: BCrypt::Password.create(params[:password]))
#         if user.save
#           session[:user_id] = user.id
#           redirect '/homepage'
#         else
#           @error = 'Invalid input. Please try again.'
#           erb :register
#         end
#       end
#       get '/logout' do
#         session.clear
#         redirect '/login'
#       end
# end
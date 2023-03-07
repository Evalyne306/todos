 #require 'sinatra'
 #require 'sinatra/cors'
class MovieController < ApplicationController

    # add routes
    set :default_content_type, 'application/json'
    get '/movies' do
        movies = Movie.all
        movies.to_json
      end
      post '/movies/create' do
        data = JSON.parse(request.body.read)

        begin
        movie = Movie.create(data)
        [201,movie.to_json]
        rescue => e
          [422,{
            error:"An error occured while creating a new movie"
          }.to_json]
        end
      end

      get '/movies/create' do
        movies = Movie.all
        movies.to_json
      end
      delete '/movie/destroy/:id' do
        begin
            movie = Movie.find(params[:id])
            movie.destroy
            json_response(data: { message: "movie deleted successfully" })
          rescue => e
            [422,{
              error:"An error occured while deleting a new movie"
            }.to_json]
          end
    end
    put '/movies/update/:id' do
      begin
        movie = Movie.find(params[:id])
        movie.update(params)
        json_response(data: { message: "movie updated successfully" })
      rescue => e
        json_response(code: 422, data: { error: e.message })
      end
    end
    # in application_controller.rb

  get '/movies/update/:id' do
    movies = Movie.all
    movies.to_json
  end

      configure do
        enable :cors
      end

end
class ApplicationController < Sinatra::Base

    # add routes
    get '/users' do
        "Hello World"
      end
      get '/users/create' do
        "Hello World"
      end
end
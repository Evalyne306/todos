require_relative 'config/environment'
 require 'sinatra/activerecord/rake'

task :start do
    exec "rerun -b 'rackup config.ru'"
# exec "bundle exec rerun -b rackup config.ru"
end

task :console do
    require './config/environment'
    require 'irb'
    ARGV.clear
    IRB.start
  end

#   task :server do
#     # Your code to start the server goes here

#   end